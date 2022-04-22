import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, {useState} from 'react'

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';



const Contacts1 = () => {

    const [contacts, setContacts] = useState([])
    const [name, setName] = useState([])
    const [mobile, setMobile] = useState([])


    const CheckContactsPermission = async () => {
        const contactperm = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
        if (contactperm === PermissionsAndroid.RESULTS.GRANTED)
            return true;
        else 
            return false;
    }
    
   const GetContacts = () =>  {
    CheckContactsPermission()
    .then((grantperm) => {
    console.log(grantperm)
     if (grantperm) {

            Contacts.getAll()
                .then((contacts) => {
                    console.log(contacts);
                    setContacts(contacts, console.log(contacts.length))
                })
                .catch((err) => { 
                    throw err;
                })
     }
      else
        console.log('No permission')
        })
    }

   const renderPhoneNumbers = (item) => {
        return (
        item.phoneNumbers.map((phone,index) => { return (
            <Text key={index} style={styles.textStyle}>{phone.label} : {phone.number}</Text>
        )}
        ))
        }
        
       const renderEmailAddresses = (item) => {
        return (
        item.emailAddresses.map((email,index) => { return (
            <Text key={index} style={styles.textStyle}>{email.label} : {email.email}</Text>
        )}
        )) 
        }

        const ContactsWritePermission = async () => {
            const contactperm = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS);
            if (contactperm === PermissionsAndroid.RESULTS.GRANTED)
                return true;
            else 
                return false;
        }

        const AddContacts =()=>{
            ContactsWritePermission()
            .then((grantperm) => {
                console.log(grantperm)
                 if (grantperm) {

                    const newcontact = {
                        recordID : contacts.length + 1,
                        displayName : name,
                        givenName : name ,
                        phoneNumbers : [{
                            label:'mobile',
                            number: mobile
                        }]
                    }

                    Contacts.addContact(newcontact)
                }
             else
                console.log('No permission')
        })
        }

  return (
    <View style={styles.div1}>
      <Text style={styles.h1}>Contacts</Text>
      <TouchableOpacity onPress={()=> GetContacts()}>
          <Text style={styles.b1}>Get Contacts</Text>
      </TouchableOpacity>
        <View style={styles.input1View}>
            <TextInput
                placeholder='Name'
                style={styles.input1}
                onChangeText={(name)=>setName(name)}
            />
        </View>
        <View style={styles.input1View}>
            <TextInput
                placeholder='Mobile'
                style={styles.input1}
                onChangeText={(mobile)=> setMobile(mobile)}
                keyboardType='phone-pad'
            />
        </View>
        <TouchableOpacity onPress={()=> AddContacts()}>
          <Text style={styles.b1}>Add Contact</Text>
      </TouchableOpacity>
      <FlatList
          data={contacts}
          keyExtractor={item => item.recordID}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) =>
          <View style={styles.flatviewStyle}>
            <Text style={styles.textStyle}>ID :{item.recordID}</Text>
            <Text style={styles.textStyle}>DispalyName :{item.displayName}</Text>
            <Text style={styles.textStyle}>{item.familyName}</Text>
            {renderPhoneNumbers(item)}
            {renderEmailAddresses(item)}
          </View>
          } 
        />
    </View>
  )
}

export default Contacts1

const styles = StyleSheet.create({
    div1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    flatviewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        padding:5
    },
    h1:{
        fontWeight:'bold',
        fontSize:40
    },
    b1:{
        borderWidth:2,
        padding:8,
        borderRadius:10,
        fontSize:20,
        backgroundColor:'#1a66ff',
        color:'white',
        margin:10
    },
    input1:{
        borderWidth:2,
        width:'80%'
    },
    input1View:{
        height:50,
        margin:10,
        width:"80%",
        justifyContent:'center',
        alignItems:'center'
    }
})