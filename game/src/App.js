import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let imageArr = [
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        },
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        },
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        },
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        },
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        },
        {
            name: '',
            src: ''
        },
        {
            name:'',
            src:''
        }
    ]


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
            Memory Game
        </header>
        
        
        
        
        
        
      </div>
    );
  }
}

export default App;





// let imagesArr = [
//   {
//     name: 'cactus',
//     src: 'https://i.pinimg.com/236x/6d/78/03/6d7803411e78930fbbf3502f807e902a--image-editing-royalty-free-stock-photos.jpg'
//   },
//   {
//     name: 'red thing',
//     src: 'https://i.pinimg.com/170x/d0/46/1b/d0461b6d786c9d967f60dd4168fbd00f--royalty-free-video-video-stock.jpg'
//   },
//   {
//     name: 'snake',
//     src: 'https://i.pinimg.com/170x/67/36/e5/6736e526fd50d61057619c7d27e3c8cc--royalty-free-clipart-free-clipart-images.jpg'
//   }
// ];

// function shuffle(a) {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
// }

// class Image extends Component {
//   render() {
//     console.log('this.props', this.props);

//     return (
//       <img
//         onClick={() => {
//           console.log(this.props.name);
//           this.props.onImageClick();
//         }}
//         src={this.props.imgSrc}
//         style={{ cursor: 'pointer', margin: 10, border: '2px solid red' }}
//       />
//     );
//   }
// }

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       images: imagesArr
//     };
//     this.handleImageClick = this.handleImageClick.bind(this);
//   }

//   handleImageClick() {
//     this.setState({ images: shuffle(imagesArr) });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Guess Who!</h1>
//           <div>
//             {
//               this.state.images.map((image) => {
//                 return (
//                   <Image
//                     onImageClick={this.handleImageClick}
//                     imgSrc={image.src}
//                     name={image.name}
//                   />
//                 );
//               })
//             }
//           </div>
//         </header>
//       </div>
//     );
//   }
// }