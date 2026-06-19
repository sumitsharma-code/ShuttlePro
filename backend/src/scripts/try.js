function getPrioritySequence(size) {
    // Base case: if size is 1, the only line is 1
    if (size === 1) return [1];
    
    // 1. Recursively get the sequence for a bracket half its size
    const halfSequence = getPrioritySequence(size / 2);
    const result = [];
    
    // 2. For every position in the smaller bracket, split it into two lines
    // Line A (top seed/bye preference) and Line B (its mirrored partner)
    for (let i = 0; i < halfSequence.length; i++) {
        const currentLine = halfSequence[i];
        
        // Push the original line
        result.push(currentLine);
        
        // Push its global mirrored partner line
        // (In a 16 bracket, Line 1's partner is 16, Line 8's is 9, etc.)
        result.push(size - currentLine + 1);
    }
    
    return result;
}

console.log(getPrioritySequence(16));