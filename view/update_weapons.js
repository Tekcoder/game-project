const replaceWeaponOnMap = (value, weapon, cell_number) => {
    let tile = $('.box[data-index="' + cell_number + '"]');
    whoIsActive();
    tile.removeClass(weapon).addClass(playerActive.weapon);
    playerActive.weapon = weapon;    
    playerNotActive.power = value;        
}

const replaceWeaponOnBoard = (power) => {
    whoIsActive();
    $('.weps-' + notActivePlayer).empty();
    $('<img src="images/replace-weapons/ammunition-' + currentWeapon +'.png">').appendTo(".weps-" + notActivePlayer);
    $(".weapons-" + notActivePlayer).text(power);
}

const checkWeapon = (num) => {
    let tile = $('.box[data-index="' + num + '"]');
    if (tile.hasClass('weapon')) {
        if (tile.hasClass('wp-1')) {
            currentWeapon = 1;
            replaceWeaponOnMap(firstWeapon.value, 'wp-1', num);
            replaceWeaponOnBoard(firstWeapon.value);
            return;
        }
        if (tile.hasClass('wp-2')) {
            currentWeapon = 2;
            replaceWeaponOnMap(secondWeapon.value,'wp-2',num);
            replaceWeaponOnBoard(secondWeapon.value); 
            return;
        }
        if (tile.hasClass('wp-3')) {
            currentWeapon = 3;
            replaceWeaponOnMap(thirdWeapon.value, 'wp-3', num);
            replaceWeaponOnBoard(thirdWeapon.value);
            return;
        }
        if (tile.hasClass('wp-4')) {
        currentWeapon = 4;
        replaceWeaponOnMap(fourthWeapon.value,'wp-4', num);
        replaceWeaponOnBoard(fourthWeapon.value);
        return;
        }
        if (tile.hasClass('wp-5')) {
            currentWeapon = 5;
            replaceWeaponOnMap(fifthWeapon.value,'wp-5', num);
            replaceWeaponOnBoard(fifthWeapon.value);
            return;
            }
        
    }    

}

// hide attack & defend button
attackBtn1.hide();
attackBtn2.hide(); 
defendBtn1.hide();
defendBtn2.hide();