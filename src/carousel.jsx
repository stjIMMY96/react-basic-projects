import { useState } from "react"

const data = ["https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3JtNjg1ZGVzaWduLXRuLXJlbWl4LTAwMWMuanBn.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSIrg4gBumlv3GZUE8xP0kkr1v_v8iUVO-VyJEsWMApJm7K5uqXDlAd2NX9vF0eRYJWI&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTU7pqv-mw0DpQdU3XOLGAWYLSTrQWoxNv9IsYsW6-yAX0t3J2LxaNnYOmxapsYEOCvsI&usqp=CAU"
]


function Slider(){
    const [imageIndex, setImageIndex] = useState(0);

    function handlePrev(){
        if(imageIndex == 0) setImageIndex(data.length - 1);
        else{
            setImageIndex(imageIndex - 1);
        }
        console.log(imageIndex);
    }

    function handleNext(){
        if(imageIndex == data.length - 1) setImageIndex(0);
        else{
            setImageIndex(imageIndex + 1);
        }
        console.log(imageIndex);
    }
    return(
        <>
           <button onClick={handlePrev}>Previous</button>
           <img src={data[imageIndex]}></img>
           <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Slider;