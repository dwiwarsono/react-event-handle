import React from 'react'

class Products extends React.Component {
  // constructor(props){
  //   super(props);

  //   console.log(props);
  //   // this._handleBuyProduct = this._handleBuyProduct.bind(this);
  // }


  /* isiParameter INI SAMA SAJA SEPERTI itemData.namaProduct KARENA PADA onClick YANG MENGACU KE FUNCTION INI BERISI PARAMETER TSB, JADI itemData.namaProduct INI DIMASUKAN KEDALAM isiParameter*/
  // _handleBuyProduct(isiParameter) 
  //   alert(isiParameter);
  //   console.log(isiParameter);
  // }


  /* NAH KALO INI JIKA PARAMETER DI KOSONGKAN, AKAN TETAPI PADA EVENT NYA HARUS JELAS APA YANG AKAN DI EKSEKUSI, COONTOH PADA alert DIBAWAH DIMASUKAN iteData.namaProduct, BANDINGKAN DENGAN CODING DIATAS, PERLU DI INGAT, JIKA MEMAKAI SEPERTI INI .bind HARUS DIPAKAI DAN CONSTRUCTOR HARUS ADA*/
  // _handleBuyProduct() { 
  //   alert(this.props.itemData.namaProduk + ' ' + this.props.itemData.harga);
  // }

/* JIKA MEMAKAI SEPERTI INI CONSTRUCTOR DAN BIND TIDAK ADA PUN TIDAK JADI MASALAH */
  _handleBuyProduct = () => {
    alert(this.props.itemData.namaProduk + ' ' + this.props.itemData.harga);
  }

  render() {
    const {itemData} = this.props;
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img alt={itemData.namaProduk} src={itemData.img}/>
          <div className="caption">
            <h3>{itemData.namaProduk}</h3>
            <p>Rp. {itemData.harga}</p>
          </div>

          {/* PERLU HHATI" DALAM EVENT, HARUS DI CEK APAKAH MMENGGUNAKAN KURUNG ATAU TIDAK< DICEK KEMBALI*/}
          <button type="button" className="btn btn-success" onClick={ this._handleBuyProduct }> {/* CONTOH JIKA SEPERTI INI MAKA DI EVENT HARUS DI ISI PARAMETER onClick={this._handleBuyProduct(itemData.namaProduck)}*/}
          {/* PERBEDAAN DENGAN onClick={ this._handleBuyProduct('isi parameter')} INI AKAN LANGSUNG DIJALANKAN, BEDA DENGAN ARROW FUNCTION DIATAS, SAAT EVENT DI CLICK BARU DIJALANKAN, ATAU JIKA TIDAK MENGGUAKAN ARROW FUNCTION, MAKA HARUS DIBUAT BIND*/}
          Tambah Keranjang
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default Products;