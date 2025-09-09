// This is a program to calculate net salary based on basic salary and benefits, applying the SHIF, PAYEE and NSSF deductions.


function calculateNetSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;

    //Payee's compilation
    const relief = 2400;
    let taxable = grossSalary;
    let tax = 0;
    const bands = [
        { limit: 24000, rate: 0.10},
        { limit: 8333, rate: 0.25},
        { limit: 467667, rate: 0.30},
        { limit: 300000, rate: 0.325},
        { limit: Infinity, rate: 0.35}, 
    ];

    for (const band of bands) {
        if (taxable <= 0) break;
        const amount = Math.min(band.limit, taxable);
        tax += amount * band.rate;
        taxable -= amount;
    }
    // Apply relief
    tax = Math.max(tax - relief, 0);

    // SHIF Deduction

    const shif = Math.max(grossSalary * 0.0275, 300);

    // NSSF Deduction

    const nssf = Math.min(grossSalary * 0.06, 4320);

    // Net salary
    const netsalary = grossSalary - (tax + shif + nssf);

    return{
        grossSalary: grossSalary.toFixed(3),
        payee: tax.toFixed(3),
        shif: shif.toFixed(3),
        nssf: nssf.toFixed(3),
        netSalary: netsalary.toFixed(3),
    };
}

// The final output includes the gross salary, payee tax, SHIF, NSSF and net salary.

//Example:
const result = calculateNetSalary(80000, 30000);
console.log("SHIF:", result.shif);
console.log("NSSF:", result.nssf);