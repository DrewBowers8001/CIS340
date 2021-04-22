
import React from 'react';
import {  Text,Image, ScrollView   } from 'react-native';

export default function Wordtranslator()  {
  const dog = {
    uri: 'cXu05KENE1g%26pid%3dImgRaw&exph=1900&expw=1900&q=picture+of+dog&simid=608048926884852187&ck=7394F747C63CF2F544B8CD7AA6913290&selectedIndex=0&FORM=IRPRST&idpp=overlayview&ajaxhist=0',
    width: 64,
    height: 64 
  }
  return (
    <ScrollView>
      <Text style= {{fontsize: 80}}>try to scroll down </Text> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
       <Image source ={dog}/> 
       <Image source ={dog}/> 
       <Image source ={dog}/> 
       <Text style= {{fontsize: 80}}>try again </Text> 
       <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
      <Image source ={dog}/> 
       <Image source ={dog}/> 
       <Image source ={dog}/> 
       <Image source ={dog}/> 
    </ScrollView> 
      



  );
}


 