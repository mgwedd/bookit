import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';

export default class App extends Component {

  state = {
    bookResults: [
      {
       "kind": "books#volume",
       "id": "awRSDQAAQBAJ",
       "etag": "fBebBqzAXkA",
       "selfLink": "https://www.googleapis.com/books/v1/volumes/awRSDQAAQBAJ",
       "volumeInfo": {
        "title": "Life and Death: Twilight Reimagined",
        "authors": [
         "Stephenie Meyer"
        ],
        "publisher": "Little, Brown Books for Young Readers",
        "publishedDate": "2016-11-01",
        "description": "For the first time in a stand-alone edition comes Stephenie Meyer's Life and Death, a compelling reimagining of the iconic love story that will surprise and enthrall readers. There are two sides to every story.... You know Bella and Edward, now get to know Beau and Edythe. When Beaufort Swan moves to the gloomy town of Forks and meets the mysterious, alluring Edythe Cullen, his life takes a thrilling and terrifying turn. With her porcelain skin, golden eyes, mesmerizing voice, and supernatural gifts, Edythe is both irresistible and enigmatic. What Beau doesn't realize is the closer he gets to her, the more he is putting himself and those around him at risk. And, it might be too late to turn back.... With a foreword and afterword by Stephenie Meyer, this compelling reimagining of the iconic love story is a must-read for Twilight fans everywhere. Twilight has enraptured millions of readers since its first publication in 2005 and has become a modern classic, redefining genres within young adult literature and inspiring a phenomenon that has had readers yearning for more. The novel was a #1 New York Times bestseller, a #1 USA Today bestseller, a Time magazine Best Young Adult Book of All-Time, an NPR Best Ever Teen Novel, and a New York Times Editor's Choice. The Twilight Saga, which also includes New Moon, Eclipse, Breaking Dawn, The Short Second Life of Bree Tanner: An Eclipse Novella, and The Twilight Saga: The Official Illustrated Guide, has sold nearly 155 million copies worldwide.",
        "industryIdentifiers": [
         {
          "type": "ISBN_13",
          "identifier": "9780316557955"
         },
         {
          "type": "ISBN_10",
          "identifier": "0316557951"
         }
        ],
        "readingModes": {
         "text": true,
         "image": false
        },
        "pageCount": 400,
        "printType": "BOOK",
        "categories": [
         "Young Adult Fiction"
        ],
        "averageRating": 4.0,
        "ratingsCount": 5,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.2",
        "panelizationSummary": {
         "containsEpubBubbles": false,
         "containsImageBubbles": false
        },
        "imageLinks": {
         "smallThumbnail": "http://books.google.com/books/content?id=awRSDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
         "thumbnail": "http://books.google.com/books/content?id=awRSDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=awRSDQAAQBAJ&printsec=frontcover&dq=Twilight&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=awRSDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-awRSDQAAQBAJ"
       },
       "saleInfo": {
        "country": "US",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
         "amount": 9.99,
         "currencyCode": "USD"
        },
        "retailPrice": {
         "amount": 9.99,
         "currencyCode": "USD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=awRSDQAAQBAJ&rdid=book-awRSDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
         {
          "finskyOfferType": 1,
          "listPrice": {
           "amountInMicros": 9990000.0,
           "currencyCode": "USD"
          },
          "retailPrice": {
           "amountInMicros": 9990000.0,
           "currencyCode": "USD"
          },
          "giftable": true
         }
        ]
       },
       "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
         "isAvailable": true,
         "acsTokenLink": "http://books.google.com/books/download/Life_and_Death_Twilight_Reimagined-sample-epub.acsm?id=awRSDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
         "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=awRSDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
       },
       "searchInfo": {
        "textSnippet": "For fans of the worldwide phenomenon Twilight comes Stephenie Meyer&#39;s Life and Death, a compelling reimagining of the iconic love story that will surprise and enthrall readers."
       }
      }, {
        "kind": "books#volume",
        "id": "gsiHQ55cKOsC",
        "etag": "YFurr3sinr0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/gsiHQ55cKOsC",
        "volumeInfo": {
         "title": "Twilight: The Graphic Novel",
         "authors": [
          "Stephenie Meyer"
         ],
         "publisher": "Yen Press LLC",
         "publishedDate": "2011-10-11",
         "description": "Having uncovered the dark secret of her enigmatic classmate, Edward Cullen, Bella Swan embraces her feelings for him, trusting Edward to keep her safe despite the risks. When a rival clan of vampires makes its way into Forks, though, the danger to Bella has never been more real. Will she make the ultimate sacrifice to protect the people dearest to her? The second volume of Twilight: The Graphic Novel completes the visual adaptation of Stephenie Meyer's worldwide bestselling debut novel and is a must-have for any collector's library.",
         "industryIdentifiers": [
          {
           "type": "ISBN_13",
           "identifier": "9780316213189"
          },
          {
           "type": "ISBN_10",
           "identifier": "0316213187"
          }
         ],
         "readingModes": {
          "text": true,
          "image": true
         },
         "pageCount": 240,
         "printType": "BOOK",
         "categories": [
          "Comics & Graphic Novels"
         ],
         "averageRating": 4.0,
         "ratingsCount": 19,
         "maturityRating": "NOT_MATURE",
         "allowAnonLogging": true,
         "contentVersion": "1.4.4.0.preview.3",
         "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
         },
         "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=gsiHQ55cKOsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=gsiHQ55cKOsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language": "en",
         "previewLink": "http://books.google.com/books?id=gsiHQ55cKOsC&printsec=frontcover&dq=Twilight&hl=&cd=2&source=gbs_api",
         "infoLink": "https://play.google.com/store/books/details?id=gsiHQ55cKOsC&source=gbs_api",
         "canonicalVolumeLink": "https://market.android.com/details?id=book-gsiHQ55cKOsC",
         "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "2",
          "volumeSeries": [
           {
            "seriesId": "u4jMGgAAABB2kM",
            "seriesBookType": "ISSUE",
            "orderNumber": 3
           }
          ]
         }
        },
        "saleInfo": {
         "country": "US",
         "saleability": "FOR_SALE",
         "isEbook": true,
         "listPrice": {
          "amount": 9.99,
          "currencyCode": "USD"
         },
         "retailPrice": {
          "amount": 9.99,
          "currencyCode": "USD"
         },
         "buyLink": "https://play.google.com/store/books/details?id=gsiHQ55cKOsC&rdid=book-gsiHQ55cKOsC&rdot=1&source=gbs_api",
         "offers": [
          {
           "finskyOfferType": 1,
           "listPrice": {
            "amountInMicros": 9990000.0,
            "currencyCode": "USD"
           },
           "retailPrice": {
            "amountInMicros": 9990000.0,
            "currencyCode": "USD"
           },
           "giftable": true
          }
         ]
        },
        "accessInfo": {
         "country": "US",
         "viewability": "PARTIAL",
         "embeddable": true,
         "publicDomain": false,
         "textToSpeechPermission": "ALLOWED",
         "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Twilight_The_Graphic_Novel-sample-epub.acsm?id=gsiHQ55cKOsC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
         },
         "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Twilight_The_Graphic_Novel-sample-pdf.acsm?id=gsiHQ55cKOsC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
         },
         "webReaderLink": "http://play.google.com/books/reader?id=gsiHQ55cKOsC&hl=&printsec=frontcover&source=gbs_api",
         "accessViewStatus": "SAMPLE",
         "quoteSharingAllowed": false
        },
        "searchInfo": {
         "textSnippet": "The second volume of Twilight: The Graphic Novel completes the visual adaptation of Stephenie Meyer&#39;s worldwide bestselling debut novel and is a must-have for any collector&#39;s library."
        }
       },
       {
        "kind": "books#volume",
        "id": "ZfjzX7M8zt0C",
        "etag": "BewhUJQ96ds",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ZfjzX7M8zt0C",
        "volumeInfo": {
         "title": "Twilight",
         "authors": [
          "Stephenie Meyer"
         ],
         "publisher": "Little, Brown Books for Young Readers",
         "publishedDate": "2007-07-18",
         "description": "Isabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn. Up until now, Edward has managed to keep his vampire identity a secret in the small community he lives in, but now nobody is safe, especially Isabella, the person Edward holds most dear. The lovers find themselves balanced precariously on the point of a knife-between desire and danger.Deeply romantic and extraordinarily suspenseful, Twilight captures the struggle between defying our instincts and satisfying our desires. This is a love story with bite.",
         "industryIdentifiers": [
          {
           "type": "ISBN_10",
           "identifier": "0316007447"
          },
          {
           "type": "ISBN_13",
           "identifier": "9780316007443"
          }
         ],
         "readingModes": {
          "text": true,
          "image": false
         },
         "pageCount": 544,
         "printType": "BOOK",
         "categories": [
          "Young Adult Fiction"
         ],
         "averageRating": 4.0,
         "ratingsCount": 2795,
         "maturityRating": "NOT_MATURE",
         "allowAnonLogging": true,
         "contentVersion": "1.14.11.0.preview.2",
         "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
         },
         "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ZfjzX7M8zt0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ZfjzX7M8zt0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language": "en",
         "previewLink": "http://books.google.com/books?id=ZfjzX7M8zt0C&printsec=frontcover&dq=Twilight&hl=&cd=3&source=gbs_api",
         "infoLink": "https://play.google.com/store/books/details?id=ZfjzX7M8zt0C&source=gbs_api",
         "canonicalVolumeLink": "https://market.android.com/details?id=book-ZfjzX7M8zt0C"
        },
        "saleInfo": {
         "country": "US",
         "saleability": "FOR_SALE",
         "isEbook": true,
         "listPrice": {
          "amount": 9.99,
          "currencyCode": "USD"
         },
         "retailPrice": {
          "amount": 9.99,
          "currencyCode": "USD"
         },
         "buyLink": "https://play.google.com/store/books/details?id=ZfjzX7M8zt0C&rdid=book-ZfjzX7M8zt0C&rdot=1&source=gbs_api",
         "offers": [
          {
           "finskyOfferType": 1,
           "listPrice": {
            "amountInMicros": 9990000.0,
            "currencyCode": "USD"
           },
           "retailPrice": {
            "amountInMicros": 9990000.0,
            "currencyCode": "USD"
           },
           "giftable": true
          }
         ]
        },
        "accessInfo": {
         "country": "US",
         "viewability": "PARTIAL",
         "embeddable": false,
         "publicDomain": false,
         "textToSpeechPermission": "ALLOWED",
         "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Twilight-sample-epub.acsm?id=ZfjzX7M8zt0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
         },
         "pdf": {
          "isAvailable": false
         },
         "webReaderLink": "http://play.google.com/books/reader?id=ZfjzX7M8zt0C&hl=&printsec=frontcover&source=gbs_api",
         "accessViewStatus": "SAMPLE",
         "quoteSharingAllowed": false
        },
        "searchInfo": {
         "textSnippet": "With 160 million copies of the Twilight Saga sold worldwide, this addictive love story between a teenage girl and a vampire redefined romance for a generation. Here&#39;s the book that started it all."
        }
       }
    ]
  }
  
  render() {
    const { bookResults } = this.state;
    return (
      <>
        <Header />
        <SearchBar />
        <BookList 
          bookResults={ bookResults } />
      </>
    );
  }
}
