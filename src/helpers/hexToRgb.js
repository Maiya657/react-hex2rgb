export default function hexToRgb(hex) {  
    let num = parseInt(hex.slice(1), 16);  
    let r = (num >> 16) & 255;  
    let g = (num >> 8) & 255;  
    let b = num & 255;  
    return {'r': r, 'g': g, 'b': b};  
}  