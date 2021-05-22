const process = (body) => {
    let { int, str } = body
    let arryCompress = []
    str = str.toUpperCase()
    for (let i = 0; i < str.length; i++) {
        //console.log(i,int) 
        let temp = []
        let inot = range(i, int) // indices que no se incluyen 
        str.split('').forEach((element, j) => {
            if (!inot.includes(j)) {
                temp.push(element)
            }
        });
        int++
        let newStr = temp.join('')
        arryCompress.push(compress(newStr))
    }
    let letters = arryCompress.sort((anterior, siguiente) => {
        return siguiente.length - anterior.length;
    });

    return {
        result: letters[letters.length - 1],
        length: letters[letters.length - 1].length,
        inputs: {
            cadena: str,
            int: body.int
        }
    }

}

const range = (start, stop) => Array.from({ length: (stop - start) }, (_, i) => start + (i));

const compress = (str) => {
    let count = 0
    let result = ""
    for (let k = 0; k < str.length; k++) {
        count++
        if (str[k] != str[k + 1]) {
            count == 1 ? count = "" : count = count
            result = result + count + str[k];
            count = 0;
        }
    }
    return result
}

module.exports = process;