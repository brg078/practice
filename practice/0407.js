var number = function(busStops){

    let on = 0;
    let off = 0;

    for (stops of busStops){

        on += stops[0];
        off += stops[1]

    }

    console.log(on - off);
    return on - off;
}

number([[0,0]])