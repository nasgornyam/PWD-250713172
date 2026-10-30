function fn_ValForm(){
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";
    
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var email = document.getElementById("email").value;
    var kategori = document.getElementById("kategori").value;
    var bknEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;


    if (nama==""){
        sMsg += "nama belum diisi!";
    }
    if (email==""){
        sMsg += "nama belum diisi!";
    }else if(!bknEmail.test(email)){
        sMsg += "format email tidak valid";
    }

    if (umur==""){
        sMsg += "umur belum diisi!";
    }else if(isNaN(umur)){
        sMsg += "Umur harus berupa angka";
    }else {
        var umur= parseInt(umur);
        if(umur > 65){
            sMsg += "Umur harus diantara 17 sampai 65 tahun.";
        }else if(umur >= 17){
            if(umur >25){
                sInfo="Paket Umum";
            }else{
                sInfo="Paket Pelajar";
            }
        }else{
            sMsg += "Umur harus diantara 17 sampai 65 tahun.";
        }
    }

    if(kategori==""){
        sMsg += "Paket member belum dipilih.";
    }

    if(sMsg != ""){
        alert("Peringatan: "+sMsg);
        return false;
    }

    switch (kategori) {
        case "S" :
            sPilihan="Silver";
            break;
        case "G" :
            sPilihan="Gold";
            break;
        case "P" :
            sPilihan="Platinum";
            break;
    }

    alert("terima kasih " +nama+ "!Anda terdaftar di paket " + kategori + "("+sInfo+ ").") ;
    return true;
}

