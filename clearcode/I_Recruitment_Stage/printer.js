var topPart = [
    ['.', '.', '#', '.', '.', '.', '#', '.', '.'],
    ['.', '#', '#', '#', '.', '#', '#', '#', '.'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '.', '#', '#', '#', '.', '#', '#'],
    ['#', '#', '.', '.', '#', '.', '.', '#', '#']
]

var middlePart = [
    ['#', '#', '.', '.', '.', '.', '.', '#', '#']
]

var bottomPart = [
    ['#', '#', '#', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '.', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['.', '#', '#', '#', '#', '#', '#', '#', '.'],
    ['.', '.', '#', '#', '#', '#', '#', '.', '.'],
    ['.', '.', '.', '#', '#', '#', '.', '.', '.'],
    ['.', '.', '.', '.', '#', '.', '.', '.', '.']
]

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];
var arg4 = process.argv[5];

function print(arg) {
    process.stdout.write(arg);
}

function printArray(array, heartWidth, partialHeight) {
    for (var i = 0; i < array.length; i++) {
        for (var l = 0; l < partialHeight; l++) {
            for (var j = 0; j < array[i].length; j++) {
                for (var k = 0; k < heartWidth; k++) {
                    print(array[i][j]);
                }
            }
            print('\n');
        }
    }
}

printArray(topPart, arg1, arg2);
printArray(middlePart, arg1, arg3);
printArray(bottomPart, arg1, arg4);