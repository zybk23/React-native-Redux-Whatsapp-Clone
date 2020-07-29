
import ImagePicker from 'react-native-image-picker';




const URI=()=>{
    const options={
        title:"Fotoğraf Seçiniz",
        storeOptions:{
            skipBackup:true,
            path:"images"
        }
    };
    ImagePicker.showImagePicker(options,(response)=>{
        if(response.didCancel){
            console.log("Cancelled")
        }else if(response.error){
            console.log("Error : ", response.error )
        }else if(response.customButton){
            console.log("Tapped: ", response.customButton)
        }else{
            return(response.uri)
        }
    })
};

export default URI;
