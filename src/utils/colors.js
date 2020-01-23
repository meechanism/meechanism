
// Depending on the hex bg value passed, determine text color based
// on generic .3/.6/.1 contrast rules
export const getTextColorByBg = (bg) => {
    // strip any hash
    bg = bg.replace('#', '');

    // find r, g, b portions
    let r = parseInt( bg.substr(0,2), 16);
    let g = parseInt( bg.substr(2,2), 16);
    let b = parseInt( bg.substr(4,2), 16);

    // find intensity, the sum of r,g,b
    let intensity = (r * .3) + (g * .6) + (b * .1);

    if (intensity > 186) return '#000000';
    return '#ffffff';
}
