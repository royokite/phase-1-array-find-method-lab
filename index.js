// Array find method lab!

function superbowlWin(record) {
    const result = record.find(item => item.result==='W');
    
    if (!!result===true) return result.year;
    else return result;
}
