import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';

class App extends Component {

  _eventClick() {
    console.log('Event on click di AppComponent')
  }

  _eventClick2(isiParam) {
    console.log(isiParam)
  }

  _eventClick3(isiParam) {
    console.log(isiParam)
  }

  _eventClick4 = () => {
    console.log('EVENT TOMBOL 4')
  }

  render() {
    const namaBarang = [
      {
        id: 1,
        namaProduk: 'Iphone 6 Plus',
        harga: '15.000.000',
        img: "https://cdn.ndtv.com/tech/images/gadgets/iphone5-vs-4S-new.jpg",
        status: true
      },
      {
        id: 2,
        namaProduk: 'Samsung j7',
        harga: '12.000.000',
        img: "https://i.gadgets360cdn.com/products/large/1526892165_635_Samsung_Galaxy_J6.jpg",
        status: false
      },
      {
        id: 3,
        namaProduk: 'Oppo Smart',
        harga: '10.000.000',
        img: "https://i.gadgets360cdn.com/products/large/1530947258_635_oppo_a5.jpg",
        status: true
      },
    ];

    const elements = namaBarang.map((barang, index) => {
      let result = '';
      if (barang.status) {
        result = <Products key={index}
          itemData={{
            key: barang.id,
            namaProduk: barang.namaProduk,
            harga: barang.harga,
            img: barang.img,
            status: barang.status,
          }}
        />
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Event</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <p>Lihat dokumentasi di sini <a>https://reactjs.org/docs/events.html#supported-events</a></p>
              
                <button className="btn btn-warning" onClick={this._eventClick}>
                  TOMBOL 1
                </button>
                <button className="btn btn-warning" onClick={this._eventClick2('INI LANGSUNG DI JALANKAN')}>
                  INI LANGSUNG DIJALANKAN!
                </button>
                <button className="btn btn-warning" onClick={() => {this._eventClick3('INI TIDAK LANGSUNG DI JALANKAN')}}>
                  INI TIDAK LANGSUNG DIJALANKAN!
                </button>
                <button className="btn btn-warning" onClick={this._eventClick4}>
                  INI SAMA DENGAN LANGSUNG DIJALANKAN!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
