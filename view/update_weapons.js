const replaceWeaponOnMap = (weaponValue, weaponClass, cell_number) => {
    let tile = $('.box[data-index="' + cell_number + '"]');
    whoIsActive();
    tile.removeClass(weaponClass).addClass(playerActive.weaponClass);
    playerActive.weaponClass = weaponClass;    
    playerNotActive.weaponValue = weaponValue;        
}

const replaceWeaponOnBoard = (weaponValue) => {
    whoIsActive();
    $('.weps-' + notActivePlayer).empty();
    $('<img src="images/replace-weapons/ammunition-' + currentWeapon +'.png">').appendTo(".weps-" + notActivePlayer);
    $(".weapons-" + notActivePlayer).text(weaponValue);
}

const checkWeapon = (num) => {
    let tile = $('.box[data-index="' + num + '"]');
    if (tile.hasClass('weapon')) {
        if (tile.hasClass('weapon-1')) {
            currentWeapon = 1;
            replaceWeaponOnMap(firstWeapon.value, 'weapon-1', num);
            replaceWeaponOnBoard(firstWeapon.value);
            return;
        }
        if (tile.hasClass('weapon-2')) {
            currentWeapon = 2;
            replaceWeaponOnMap(secondWeapon.value,'weapon-2',num);
            replaceWeaponOnBoard(secondWeapon.value); 
            return;
        }
        if (tile.hasClass('weapon-3')) {
            currentWeapon = 3;
            replaceWeaponOnMap(thirdWeapon.value, 'weapon-3', num);
            replaceWeaponOnBoard(thirdWeapon.value);
            return;
        }
        if (tile.hasClass('weapon-4')) {
        currentWeapon = 4;
        replaceWeaponOnMap(fourthWeapon.value,'weapon-4', num);
        replaceWeaponOnBoard(fourthWeapon.value);
        return;
        }
        if (tile.hasClass('weapon-5')) {
            currentWeapon = 5;
            replaceWeaponOnMap(fifthWeapon.value,'weapon-5', num);
            replaceWeaponOnBoard(fifthWeapon.value);
            return;
            }
        
    }    

}
