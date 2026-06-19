require("dotenv").config();
const mongoose = require("mongoose");

const Player = require("../models/player.model");
const Tournament = require("../models/tournament.model");
const Category = require("../models/category.model");
const Team = require("../models/team.model");
const SinglesRegistration = require("../models/singlesRegistration.model");
const DoublesRegistration = require("../models/doublesRegistration.model");
const Match = require("../models/match.model");
const Set = require("../models/set.model");
const connectDb = require("../db/db");
connectDb();
async function seed() {
    try {

        console.log("MongoDB Connected");

        // Clear data
        await Set.deleteMany();
        await Match.deleteMany();
        await SinglesRegistration.deleteMany();
        await DoublesRegistration.deleteMany();
        await Team.deleteMany();
        await Category.deleteMany();
        await Player.deleteMany();
        await Tournament.deleteMany();

        // Tournament
        const tournament = await Tournament.create({
            name: "Punjab Open 2026",
            startDate: new Date()
        });

        // Categories
        const singlesCategory = await Category.create({
            tournamentId: tournament._id,
            name: "Men Singles",
            matchType: "singles",
            gender: "male"
        });

        const doublesCategory = await Category.create({
            tournamentId: tournament._id,
            name: "Men Doubles",
            matchType: "doubles",
            gender: "male"
        });

        // Players
        const players = await Player.insertMany([
            {
                name: "Player 1",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 2",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 3",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 4",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 5",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 6",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 7",
                gender: "Male",
                dob: "2004-01-01"
            },
            {
                name: "Player 8",
                gender: "Male",
                dob: "2004-01-01"
            }
        ]);

        // Singles Registrations
        await SinglesRegistration.insertMany(
            players.map(player => ({
                categoryId: singlesCategory._id,
                playerId: player._id
            }))
        );

        // Teams
        const teams = await Team.insertMany([
            {
                playerId1: players[0]._id,
                playerId2: players[1]._id
            },
            {
                playerId1: players[2]._id,
                playerId2: players[3]._id
            },
            {
                playerId1: players[4]._id,
                playerId2: players[5]._id
            },
            {
                playerId1: players[6]._id,
                playerId2: players[7]._id
            }
        ]);

        // Doubles Registrations
        await DoublesRegistration.insertMany(
            teams.map(team => ({
                categoryId: doublesCategory._id,
                teamId: team._id
            }))
        );

        console.log("================================");
        console.log("SEED COMPLETED");
        console.log("================================");
        console.log("Tournament ID:");
        console.log(tournament._id);

        console.log("\nSingles Category ID:");
        console.log(singlesCategory._id);

        console.log("\nDoubles Category ID:");
        console.log(doublesCategory._id);

        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seed();