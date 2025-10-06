class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `${this.nama} bekerja sebagai ${this.jabatan} dan memiliki penghasilan sebesar Rp.${this.gaji}`;
    }
}

const karyawan1 = new Karyawan("Luthfi","Web Developer",7000000);
const karyawan2 = new Karyawan("Scylla","Freelance",5000000);
console.log(karyawan1.getInformation());
console.log(karyawan2.getInformation());