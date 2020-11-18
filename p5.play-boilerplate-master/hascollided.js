function hascollided(lbullet,lwall){
    var bulletRightEdge=lbullet.x+lbullet.width;
    wallleftedge=lwall.x;
    if(bulletRightEdge>=wallleftedge){
        return true;
    }
    else{
        return false;
    }
}