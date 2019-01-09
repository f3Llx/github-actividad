// VARIABLES
var damage = 0;
var health = 100;
var coins = 0;
var level = "Monster level 1";
// -----------------
function attack() {
    damage = damage + 10;
    health = health - 10; 
    coins = coins + 10;
    // cambio de monstruo 1
    if (damage == 100) {
        health = health + 200;
        level = "Monster Level 2"
    };
    if (damage == 100) {
        document.getElementById("monster").src = "img/monster.gif";
        document.getElementById("monster").classList.remove('monsterImg3');
        document.getElementById("monster").classList.add('monsterImg');
        setTimeout(tiempo1, 0);
        setTimeout(tiempo2, 1000);

        function tiempo1() {
            document.getElementById("monster").src = "img/explosion.gif";
        }

        function tiempo2() {
            document.getElementById("monster").src = "img/monster.gif";
        }
    }
    // cambio de monstruo 2
    if (damage == 300) {
        health = health + 200;
        level = "Monster Level 3"
    };
    if (damage == 300) {
        document.getElementById("monster").classList.remove('monsterImg');
        document.getElementById("monster").classList.add('monsterImg2');
        document.getElementById("monster").src = "img/monsterwinged2-.gif";
        setTimeout(tiempo1, 0);
        setTimeout(tiempo2, 1000);

        function tiempo1() {
            document.getElementById("monster").src = "img/explosion.gif";
        }

        function tiempo2() {
            document.getElementById("monster").src = "img/monsterwinged2.gif";
        }
    } else {

    };

    // FIN cambio de monstruo 2
    if (health < 0) {
        setTimeout(tiempo1, 0);
        setTimeout(tiempo2, 1000);

        function tiempo1() {
            document.getElementById("monster").src = "img/explosion.gif";
        }

        function tiempo2() {
            document.getElementById("monster").style.visibility = "hidden";
        }
    };
    // condicion limitadora de vida
    if (health < 0) {
        health = health = 0
        // FIN de condicion
    };
    if (damage > 500) {
        damage = damage = 500;
        level = "You Win"
    };
    if (damage == 500) {
        level = "You Win"
    };
    document.getElementById('damage').innerHTML = damage;
    document.getElementById('health').innerHTML = health;
    document.getElementById('monster-level').innerHTML = level;
    document.getElementById('coins').innerHTML = coins;

};
//TIENDA!!!
function abrir() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//TIENDA FIN//
// TIENDA OBJETOS//
function weaponOne() {
    document.getElementById('coins').innerHTML = coins;
    if (coins >= 100) {
        coins = coins - 100;
        document.getElementById("monster").classList.remove('weapon0');
        document.getElementById("monster").classList.remove('weapon1');
        document.getElementById("monster").classList.remove('weapon2');
        document.getElementById("monster").classList.add('weapon1');
    }
};

function weaponTwo() {
    document.getElementById('coins').innerHTML = coins;
    if (coins >= 200) {
        coins = coins - 200;
        document.getElementById("monster").classList.remove('weapon0');
        document.getElementById("monster").classList.remove('weapon1');
        document.getElementById("monster").classList.add('weapon2');
    }
};


// CURSOR CUADRADOS "TRAIL" (copiado de internet)
colours = new Array('#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff')

n = 10;

y = 0;

x = 0;

n6 = (document.getElementById && !document.all);

ns = (document.layers);

ie = (document.all);

d = (ns || ie) ? 'document.' : 'document.getElementById("';

a = (ns || n6) ? '' : 'all.';

n6r = (n6) ? '")' : '';

s = (ns) ? '' : '.style';

if (ns) {

    for (i = 0; i < n; i++)

        document.write('<layer name="dots' + i + '" top=0 left=0 width=' + i / 0.5 + ' height=' + i / 0.5 + ' bgcolor=#ff0000></layer>');

}

if (ie)

    document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie || n6) {

    for (i = 0; i < n; i++)

        document.write('<div id="dots' + i + '" style="position:absolute;top:0px;left:0px;width:' + i / 0.5 + 'px;height:' + i / 0.5 + 'px;background:#ff0000;font-size:' + i / 0.5 + '"></div>');

}

if (ie)

    document.write('</div></div>');

(ns || n6) ? window.captureEvents(Event.MOUSEMOVE): 0;

function Mouse(evnt) {

    y = (ns || n6) ? evnt.pageY + 4 - window.pageYOffset : event.y + 4;

    x = (ns || n6) ? evnt.pageX + 1 : event.x + 1;

}

(ns) ? window.onMouseMove = Mouse: document.onmousemove = Mouse;

function animate() {

    o = (ns || n6) ? window.pageYOffset : 0;

    if (ie) con.style.top = document.body.scrollTop + 'px';

    for (i = 0; i < n; i++) {

        var temp1 = eval(d + a + "dots" + i + n6r + s);



        randcolours = colours[Math.floor(Math.random() * colours.length)];

        (ns) ? temp1.bgColor = randcolours: temp1.background = randcolours;

        if (i < n - 1) {

            var temp2 = eval(d + a + "dots" + (i + 1) + n6r + s);

            temp1.top = parseInt(temp2.top) + 'px';

            temp1.left = parseInt(temp2.left) + 'px';

        } else {

            temp1.top = y + o + 'px';

            temp1.left = x + 'px';

        }

    }

    setTimeout("animate()", 10);

}

animate();
