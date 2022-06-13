let getCPF = ZDK.Page.getField("CPF").getValue();//get the value from the field
let getCleanCpf = getCPF.toString().replace(/\D+/g, "");//apply a regex that will exclude everything that isn't number
const getPartial = getCleanCpf.slice(0, -2);//get the first nine numbers from CPF

function lengthVerify() {//verify the length
    if (getCleanCpf.length < 11 || getCleanCpf.length > 11) ZDK.Client.showAlert("O seu CPF contém mais ou menos do que 11 números");
}

function createDigit(cpf) {
    const cpfArray = Array.from(cpf); 
    let count = cpfArray.length + 1;
    const getDigit = cpfArray.reduce((total, value) => {
    total += (count * Number(value));//it will multiply till there is no number in the array
    count--;//decrements the variable
    return total;
    }, 0);

    let digit = 11 - (getDigit % 11);
    digit = digit > 9 ? "0" : String(digit);
    return digit;
}

function validateCPF(getPartial) {
    lengthVerify();//Call the function
    const digit1 = createDigit(getPartial); //function that creates the first digit
    const digit2 = createDigit(getPartial + digit1);//function that creates the second digit
    let fullCpf = getPartial + digit1 + digit2;

    if (getCleanCpf === fullCpf) {//Verify if the Clean CPF is equal that the fullCpf
        ZDK.Client.showMessage("Parabéns, seu CPF é válido");
        cpfMask(fullCpf);
    } else {
        ZDK.Client.showMessage("O CPF inserido não é válido, insira um cpf válido");
        ZDK.Page.getField('CPF').setValue("");
    }
    
}

function cpfMask(fullCpf) {
		const formatedCpf = fullCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");//Regex that does the formatting the CPF
    ZDK.Page.getField('CPF').setValue(formatedCpf);
}

validateCPF(getPartial);