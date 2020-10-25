# RANDOM IMAGE GENERATION API

## ADD AND RETRIVE IMAGE
### Request :

____GET____:    /images/{id}

### Response :

Randomly generated image.

## RETRIVE ALL ADDED IMAGES

### Request :

____GET____:    /images

### Response :

___WITHOUT DATA___:

{

    "message":"No images found. Try adding one"

}

___WITH DATA___:

[

  {
    "imageId": "1",
    "imageUrl": "https://i.picsum.photos/id/766/200/200.jpg?hmac=i8NIvzl3XXKwMZzUUjQWAbKOWskcKnOApccdqQpiEzQ"
  },
  {
    "imageId": "2",
    "imageUrl": "https://i.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8"
  },
  {
    "imageId": "99",
    "imageUrl": "https://i.picsum.photos/id/476/200/200.jpg?hmac=QPKhNReQFJilT6PFUwm33_xa1DiivT32FbsWYE4evPU"
  },
  {
    "imageId": "9",
    "imageUrl": "https://i.picsum.photos/id/757/200/200.jpg?hmac=63cyrpvD1Rfu-liH-cup8mezZlu53E5a-3bzcknXxxk"
  },
  {
    "imageId": "xyz",
    "imageUrl": "https://i.picsum.photos/id/935/200/200.jpg?hmac=WNkIQ-NNhosb-4Qfz8Tixwp7-HVS540Z2dS0VDyJ5ac"
  }

]
