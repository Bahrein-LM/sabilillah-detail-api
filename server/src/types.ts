export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T[];
}

export interface Siswa {
    id: string;
    nama: string;
    kelasId: string;
    tanggalLahir: string;
    namaKelas: string;
    waliKelas: string;
}

export interface Nilai {
    id: string;
    siswaId: string;
    mataPelajaran: string;
    nilai: number;
    semester: string;
    namaSiswa: string;
    namaKelas: string;
}

export interface Kelas {
    id: string;
    nama: string;
    waliKelas: string;
}