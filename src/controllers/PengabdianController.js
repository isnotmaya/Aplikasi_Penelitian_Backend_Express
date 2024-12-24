const dbConnection = require('../config/Database');

exports.getpengabdian = async (req, res) => {

    const query = 'SELECT * FROM pengabdian';
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error('Kesalan query database:', err);
            return res.status(500).json({ message: 'Terjadi kesalahan server'});
        }
        res.json({pengabdian:results});
    });
};

exports.insertpengabdian = (req, res) => {
    const {kd_pengabdian, judul, lokasi, thn_akademik, tanggal, status} = req.body;
    const query =`INSERT INTO pengabdian (kd_pengabdian, judul, lokasi, thn_akademik, tanggal, status) VALUES (?,?,?,?,?,?)`;
    dbConnection.execute(query, [kd_pengabdian, judul, lokasi, thn_akademik, tanggal, status], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Gagal menambahkan Data!' });
            console.error('Kesalahan saat menambahkan Data:', err);
        } else {
            res.status(201).json({ message: 'Data berhasil ditambahkan!', results });
            console.log('Data berhasil ditambahkan:', results);
        }
    });
  };
  
  exports.updatepengabdian = (req, res) => {
    const { kd_pengabdian } = req.params;
    const { judul, lokasi, thn_akademik, tanggal, status } = req.body;
    const query = `UPDATE pengabdian SET judul = ?, lokasi = ?, thn_akademik = ?, tanggal = ?, status = ? WHERE kd_pengabdian = ?`;
    dbConnection.execute(query, [judul, lokasi, thn_akademik, tanggal, status, kd_pengabdian], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Gagal mengupdate Data!' });
            console.error('Kesalahan saat mengupdate Data:', err);
        } else {
            res.json({ message: 'Data berhasil diupdate!', results });
        }
    });
  };
  
  exports.deletepengabdian = (req, res) => {
    const { kd_pengabdian } = req.params;
    const checkQuery = `SELECT * FROM pengabdian WHERE kd_pengabdian = ?`;
    dbConnection.query(checkQuery, [kd_pengabdian], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Kesalahan saat memeriksa Data!' });
            console.error('Kesalahan saat memeriksa Data:', err);
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Data tidak ditemukan!' });
        } else {
            const query = `DELETE FROM pengabdian WHERE kd_pengabdian = ?`;
            dbConnection.execute(query, [kd_pengabdian], (err, results) => {
                if (err) {
                    res.status(500).json({ message: 'Gagal menghapus Data!' });
                    console.error('Kesalahan saat menghapus Data:', err);
                } else {
                    res.json({ message: 'Data berhasil dihapus!', results });
                }
            });
        }
    });
  };