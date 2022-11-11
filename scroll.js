

function scroll_to_bottom(pos) {
    let cur_pos = document.documentElement.scrollTop;
    //let dir = 1;
    let speed = 10;
    var accel = 0.2;
    // if (cur_pos > pos) { dir = -1; } //нет необходимости: функция используется только для скроллинга вниз
    setInterval(function() {
        if (cur_pos != pos && cur_pos < pos) {
            setTimeout
            console.log("Current position: "+cur_pos);
            console.log("Current speed: "+speed + " / "+ accel);
            if (pos - cur_pos >= speed * accel) {
    
                
                if ((accel < 2) && (accel >= 0.2)) {
                    if (cur_pos < pos / 3) {
                        accel += 0.05;
                    } else if (cur_pos > 2 * pos / 3) {
                        accel -= 0.05;
                    }
                }
                
                document.documentElement.scrollTop += speed * accel;
                
                cur_pos = document.documentElement.scrollTop;
    
            } else {
                document.documentElement.scrollTop = pos;
            }
        
    
        }
    }, 5);
    
    
}
