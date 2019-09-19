
// ------- COLLISION-------- 

class CollisionUtility {
    static isCollide(icon1, icon2){
        return (icon1.y === icon2.y && icon1.x === icon2.x);
    }
};

