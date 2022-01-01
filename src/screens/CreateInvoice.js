
import React, { useState, useRef } from 'react';
import {
    View, Text, ImageBackground, FlatList,
    Image, Dimensions, TouchableOpacity, ScrollView
} from 'react-native'
import { SvgXml } from 'react-native-svg';
import ButtonActive from '../component/ButtonActive';
import RBSheet from "react-native-raw-bottom-sheet";
import Button1 from '../component/Button1';
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import STYLES from '../STYLES'
import ButtonEdit from '../component/ButtonEdit';
import TextInput1 from '../component/TextInput1';
import Svgs from '../assets/svgs/Svgs'
import TextInputEdit from '../component/TextInputEdit';

import TextArea1 from '../component/TextArea1';
import TextInputWithoutSvg from '../component/TextInputWithoutSvg';
import ImagePicker from 'react-native-image-crop-picker';

const CreateInvoice = props => {
    const [checked, setChecked] = useState(false);

    const [stateImageEditFrom, setStateImageEditFrom] = useState(null);
    const [stateImageEditBilledTo, setStateImageEditBilledTo] = useState(null);

    const refRBSheetEditFrom = useRef();
    const refRBSheetEditBilledTo = useRef();
    const refRBSheetAdd = useRef();
    const date = "01-01-1999"
    const [stateDataBase, setStateDataBase] = useState(
        {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.', discount: '5%', price: 100,
            quantity: 1,
            total: 100
        })



    const imageTakeFromGalleryEditFromCompany = () => {


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImageEditFrom(image.path)
        });

    }

    const imageTakeFromGalleryEditBilledTo = () => {


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImageEditBilledTo(image.path)
        });

    }
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    flex: 0.1,// backgroundColor: 'red',
                    justifyContent: 'space-between'

                }}>

                    <Text style={[STYLES.fontSize24_000000_LouisGeorgeCafé_Regular,
                    { alignSelf: 'center' }]}>
                        Create Invoice</Text>

                    <Text style={[STYLES.fontSize15_000000_LouisGeorgeCafé_Regular
                        , { marginBottom: '2%' }]}>Date: {date}</Text>
                    {/* <Text style={STYLES.fontSize15_000000_LouisGeorgeCafé_Regular}>Date: 01-01-1999</Text> */}
                </View>

                <View style={{
                    flex: 0.2, //backgroundColor: 'green',
                    paddingHorizontal: '1%'
                }}>
                    <View style={{
                        flex: 0.3, //backgroundColor: 'yellow',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>From :</Text>
                        <ButtonEdit onPress={() => refRBSheetEditFrom.current.open()} />
                    </View>
                    <View style={{
                        flex: 0.7, //backgroundColor: 'blue', 
                        justifyContent: 'space-between', paddingHorizontal: '1%'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
</svg>
`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>User Name Here</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
</svg>
`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>This is Adress</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>

`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>+92 300 8764218, +92 300 8764218</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
</svg>

`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%', marginBottom: '4%' }]}>www.web.com</Text>
                        </View>

                    </View>
                </View>
                <View style={{
                    flex: 0.2,// backgroundColor: 'pink',
                    paddingHorizontal: '1%'
                }}>




                    <View style={{
                        flex: 0.3, //backgroundColor: 'yellow',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>Billed To :</Text>
                        <ButtonEdit onPress={() => { refRBSheetEditBilledTo.current.open() }} />
                    </View>
                    <View style={{
                        flex: 0.7, //backgroundColor: 'blue', 
                        justifyContent: 'space-between', paddingHorizontal: '1%'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
</svg>
`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>User Name Here</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.887" height="17.887" viewBox="0 0 17.887 17.887">
  <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M8.943,10.061A5.031,5.031,0,1,0,3.913,5.031,5.032,5.032,0,0,0,8.943,10.061Zm4.472,1.118H11.49a6.081,6.081,0,0,1-5.094,0H4.472A4.471,4.471,0,0,0,0,15.651v.559a1.677,1.677,0,0,0,1.677,1.677H16.21a1.677,1.677,0,0,0,1.677-1.677v-.559A4.471,4.471,0,0,0,13.415,11.179Z" fill="#a6a6a6"/>
</svg>
`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>This is Adress</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="13.188" height="13.188" viewBox="0 0 13.188 13.188">
  <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M12.812,9.32,9.927,8.083a.618.618,0,0,0-.721.178L7.928,9.822A9.548,9.548,0,0,1,3.364,5.258L4.925,3.98A.617.617,0,0,0,5.1,3.259L3.866.374A.622.622,0,0,0,3.158.016L.479.634a.618.618,0,0,0-.479.6A11.951,11.951,0,0,0,11.952,13.189a.618.618,0,0,0,.6-.479l.618-2.679a.626.626,0,0,0-.361-.711Z" transform="translate(0 0)" fill="#a6a6a6"/>
</svg>

`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%' }]}>+92 300 8764218, +92 300 8764218</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.176" height="16.179" viewBox="0 0 16.176 16.179">
  <path id="Icon_awesome-globe" data-name="Icon awesome-globe" d="M10.976,5.521C10.5,2.608,9.388.563,8.09.563S5.676,2.608,5.2,5.521ZM4.958,8.652a20.446,20.446,0,0,0,.108,2.088H11.11a20.446,20.446,0,0,0,.108-2.088,20.446,20.446,0,0,0-.108-2.088H5.066A20.446,20.446,0,0,0,4.958,8.652ZM15.55,5.521A8.107,8.107,0,0,0,10.4.9a11.009,11.009,0,0,1,1.631,4.619ZM5.78.9A8.1,8.1,0,0,0,.63,5.521H4.152A10.965,10.965,0,0,1,5.78.9ZM15.9,6.564H12.157c.069.685.108,1.386.108,2.088s-.039,1.4-.108,2.088H15.9a8.02,8.02,0,0,0,.281-2.088A8.16,8.16,0,0,0,15.9,6.564ZM3.914,8.652c0-.7.039-1.4.108-2.088H.281a7.908,7.908,0,0,0,0,4.175H4.019C3.953,10.055,3.914,9.353,3.914,8.652ZM5.2,11.784c.473,2.913,1.589,4.958,2.887,4.958S10.5,14.7,10.976,11.784ZM10.4,16.4a8.114,8.114,0,0,0,5.154-4.619H12.03A11.009,11.009,0,0,1,10.4,16.4ZM.63,11.784A8.107,8.107,0,0,0,5.783,16.4a11.009,11.009,0,0,1-1.631-4.619H.63Z" transform="translate(0 -0.563)" fill="#a6a6a6"/>
</svg>

`} />
                            <Text style={[STYLES.fontSize14_000000_LouisGeorgeCafé_Regular
                                , { marginLeft: '5%', marginBottom: '4%' }]}>www.web.com</Text>
                        </View>

                    </View>
                </View>
                <View style={{
                    flex: 0.15,// backgroundColor: 'yellow'
                }}>

                    <View style={{
                        flex: 0.3,// backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[STYLES.fontSize18_000000_Arial_Bold,
                        ]}>
                            Description</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Price</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Quantity</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Bold}>
                            Total</Text>
                    </View>
                    <View style={{
                        flex: 0.7, //backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderBottomColor: '#E2E9FF',
                        marginBottom: '2%',
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "30%", //backgroundColor: 'green',
                            justifyContent: 'space-evenly'
                        }}>

                            <Text numberOfLines={2}
                                style={STYLES.fontSize15_000000_Arial_Regular
                                }>
                                {stateDataBase.description}
                            </Text>
                            <Text style={[STYLES.fontSize15_000000_Arial_Regular_48
                            ]}>
                                discount ({stateDataBase.discount})</Text>
                        </View>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>
                            {stateDataBase.price}</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>
                            {stateDataBase.quantity}</Text>
                        <Text style={STYLES.fontSize18_000000_Arial_Regular}>
                            {stateDataBase.total}</Text>
                    </View>


                </View>
                <View style={{
                    flex: 0.35,// backgroundColor: 'orange',
                    justifyContent: 'space-between'
                }}>


                    <TouchableOpacity
                        onPress={() => { refRBSheetAdd.current.open() }}
                        style={{
                            borderRadius: 33,
                            borderColor: '#707070',
                            backgroundColor: '#ffffff',
                            borderStyle: 'dashed',
                            marginHorizontal: '15%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            height: 50,
                            marginTop: '3%'
                        }}>
                        <Text style={STYLES.fontSize25_939393_Arial_Bold}>Add +</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>Discount</Text>
                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>5%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>Tax</Text>
                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>4%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>Subtotal</Text>
                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>300 Rs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={STYLES.fontSize18_000000_Arial_Bold}>Total</Text>
                            <Text style={STYLES.fontSize18_000000_Arial_Regular}>240 RS</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'space-between', marginBottom: '3%'
                    }}>
                        <View style={{ flex: 0.8 }}>
                            <Button1 text="Preview" />
                        </View>
                        <TouchableOpacity>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.21" height="15.172" viewBox="0 0 18.21 15.172">
  <path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M22.551,13.122l-6.69-6.259A.342.342,0,0,0,15.6,6.75c-.209.009-.474.156-.474.379v3.139a.2.2,0,0,1-.171.194C8.3,11.482,5.5,16.46,4.505,21.628c-.038.2.237.394.365.232a12.092,12.092,0,0,1,10.052-5.092.235.235,0,0,1,.2.228v3.082a.407.407,0,0,0,.687.251l6.737-6.368a.524.524,0,0,0,.166-.4A.635.635,0,0,0,22.551,13.122Z" transform="translate(-4.502 -6.749)" fill="#176eff"/>
</svg>

`} /></TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: '3%' }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16.626" height="13.301" viewBox="0 0 16.626 13.301">
  <path id="Icon_material-email" data-name="Icon material-email" d="M17.964,6H4.663A1.66,1.66,0,0,0,3.008,7.663L3,17.638A1.668,1.668,0,0,0,4.663,19.3h13.3a1.668,1.668,0,0,0,1.663-1.663V7.663A1.668,1.668,0,0,0,17.964,6Zm0,3.325-6.651,4.157L4.663,9.325V7.663l6.651,4.157,6.651-4.157Z" transform="translate(-3 -6)" fill="#176eff"/>
</svg>
`} /></TouchableOpacity>
                    </View>
                </View>

                <RBSheet
                    // closeOnDragDown={true}
                    dragFromTopOnly={true}
                    height={500}
                    animationType="slide"
                    ref={refRBSheetEditFrom}


                    // closeOnPressBack={false}
                    customStyles={{
                        container: {
                            //borderRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            paddingVertical: "5%"
                        },

                    }}

                >
                    <View style={{
                        // justifyContent: 'space-evenly',
                        flex: 1,
                        paddingHorizontal: '5%'
                    }}>
                        <View style={{
                            flex: 0.30,// backgroundColor: 'red',
                            justifyContent: 'space-between',
                            // marginBottom: '5%'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Edit From (Company)</Text>

                                <TouchableOpacity onPress={() => refRBSheetEditFrom.current.close()}>
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                    />
                                </TouchableOpacity>
                            </View>
                            {stateImageEditFrom === null ?

                                <TouchableOpacity onPress={() => imageTakeFromGalleryEditFromCompany()}>
                                    <SvgXml
                                        style={{ alignSelf: 'center' }}
                                        xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
  <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => imageTakeFromGalleryEditFromCompany()}>
                                    <Image source={{ uri: stateImageEditFrom }}
                                        resizeMode='cover' style={{
                                            borderRadius: 50,
                                            alignSelf: 'center', height: 69, width: 69
                                        }} />
                                </TouchableOpacity>

                            }

                        </View>
                        <View style={{
                            flex: 0.55, //backgroundColor: 'green',
                            paddingHorizontal: '5%',
                            justifyContent: 'space-evenly'
                        }}>

                            <TextInputEdit placeholder="Name" xml={Svgs.phone} />
                            <TextInputEdit placeholder="Location" xml={Svgs.phone} />
                            <TextInputEdit placeholder="Phone No"
                                keyboardType="numeric"
                                xml={Svgs.phone} />
                            <TextInputEdit placeholder="Website" xml={Svgs.globe} />



                        </View>

                        <View style={{
                            paddingHorizontal: '12%',
                            justifyContent: 'flex-end',
                            flex: 0.15, //backgroundColor: 'red'
                        }}>
                            <Button1
                                text="Update"

                            //  onPress={() => refRBSheetEditFrom.current.open()}
                            />
                        </View>
                    </View>
                </RBSheet>
                <RBSheet
                    // closeOnDragDown={true}
                    dragFromTopOnly={true}
                    height={500}
                    animationType="slide"
                    ref={refRBSheetEditBilledTo}


                    // closeOnPressBack={false}
                    customStyles={{
                        container: {
                            //borderRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            paddingVertical: "5%"
                        },

                    }}

                >
                    <View style={{
                        // justifyContent: 'space-evenly',
                        flex: 1,
                        paddingHorizontal: '5%'
                    }}>
                        <View style={{
                            flex: 0.25,// backgroundColor: 'red',
                            justifyContent: 'space-between',
                            // marginBottom: '5%'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Billed To</Text>

                                <TouchableOpacity onPress={() => refRBSheetEditBilledTo.current.close()}>
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                    />
                                </TouchableOpacity>
                            </View>

                            {stateImageEditBilledTo === null ?

                                <TouchableOpacity onPress={() => imageTakeFromGalleryEditBilledTo()}>
                                    <SvgXml
                                        style={{ alignSelf: 'center' }}
                                        xml={`<svg xmlns="http://www.w3.org/2000/svg" width="69.347" height="69.347" viewBox="0 0 69.347 69.347">
<path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M34.674.563A34.674,34.674,0,1,0,69.347,35.236,34.668,34.668,0,0,0,34.674.563Zm0,13.422a12.3,12.3,0,1,1-12.3,12.3A12.3,12.3,0,0,1,34.674,13.985Zm0,48.1a26.792,26.792,0,0,1-20.483-9.535,15.588,15.588,0,0,1,13.772-8.361,3.421,3.421,0,0,1,.993.154,18.512,18.512,0,0,0,5.718.965,18.441,18.441,0,0,0,5.718-.965,3.421,3.421,0,0,1,.993-.154,15.588,15.588,0,0,1,13.772,8.361A26.792,26.792,0,0,1,34.674,62.08Z" transform="translate(0 -0.563)" fill="#949494"/>
</svg>
`} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => imageTakeFromGalleryEditBilledTo()}>
                                    <Image source={{ uri: stateImageEditBilledTo }}
                                        resizeMode='cover' style={{
                                            borderRadius: 50,
                                            alignSelf: 'center', height: 69, width: 69
                                        }} />
                                </TouchableOpacity>

                            }
                        </View>
                        <View style={{
                            flex: 0.60, //backgroundColor: 'green',
                            paddingHorizontal: '5%',
                            justifyContent: 'space-evenly'
                        }}>

                            <TextInputEdit placeholder="Name" xml={Svgs.phone} />
                            <TextInputEdit placeholder="Location" xml={Svgs.phone} />
                            <TextInputEdit placeholder="Phone No" xml={Svgs.phone}
                                keyboardType="Numeric" />
                            <TextInputEdit placeholder="Website" xml={Svgs.globe} />

                            <View style={{
                                // backgroundColor: '#2979FF',
                                flexDirection: 'row',
                                alignItems: 'center',
                                //marginBottom: '5%'
                                // backgroundColor: 'red',
                                //  height: 100
                            }}>
                                <Checkbox color='#2979FF'
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                />


                                <Text style={STYLES.fontSize16_979797_Arial_Regular}>Create Customer</Text>
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: '12%',
                            justifyContent: 'flex-end',
                            flex: 0.15, //backgroundColor: 'red'
                        }}>
                            <Button1
                                text="Update"

                            //  onPress={() => refRBSheetEditFrom.current.open()}
                            />
                        </View>
                    </View>
                </RBSheet>


                <RBSheet
                    // closeOnDragDown={true}
                    dragFromTopOnly={true}
                    height={400}
                    animationType="slide"
                    ref={refRBSheetAdd}


                    // closeOnPressBack={false}
                    customStyles={{
                        container: {
                            //borderRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            paddingVertical: "5%"
                        },

                    }}

                >
                    <View style={{
                        // justifyContent: 'space-evenly',
                        flex: 1,
                        paddingHorizontal: '5%'
                    }}>

                        <View style={{
                            flex: 0.10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            //  backgroundColor: 'red',
                            alignItems: 'center'
                        }}>
                            <Text style={STYLES.fontSize22_2979FF_Arial_Bold}>Add Item</Text>

                            <TouchableOpacity onPress={() => refRBSheetAdd.current.close()}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.815" height="21.815" viewBox="0 0 21.815 21.815">
  <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.283A10.908,10.908,0,1,0,14.283,3.375,10.906,10.906,0,0,0,3.375,14.283Zm15.161-2.276a1.016,1.016,0,0,1,1.432,0,1,1,0,0,1,.294.713,1.017,1.017,0,0,1-.3.718l-4.945,4.929a1.011,1.011,0,0,1-1.395-.031l-5.019-5A1.012,1.012,0,1,1,10.035,11.9L14.288,16.2Z" transform="translate(-3.375 25.19) rotate(-90)" fill="#2979ff" opacity="0.55"/>
</svg>
`}
                                />
                            </TouchableOpacity>
                        </View>



                        <View style={{
                            flex: 0.75,// backgroundColor: 'green',
                            paddingHorizontal: '5%',
                            justifyContent: 'space-evenly'
                        }}>
                            <TextArea1
                                placeholder="Description"
                                numberOfLines={3} />
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: '5%',
                                // flex: 0.3,
                                // width: '100%',
                                //  backgroundColor: 'red',
                                justifyContent: 'space-between'


                            }}>
                                <TextInputWithoutSvg style={{ flex: 0.4 }}
                                    placeholder="Price"
                                    keyboardType='numeric'
                                />
                                <TextInputWithoutSvg style={{ flex: 0.45 }}
                                    placeholder="Quantity"
                                    keyboardType='numeric' />
                            </View>
                            <TextInputWithoutSvg
                                placeholder="Discount (%)"
                                keyboardType='decimal-pad' />
                        </View>

                        <View style={{
                            paddingHorizontal: '12%',
                            justifyContent: 'flex-end',
                            flex: 0.15, //backgroundColor: 'red'
                        }}>
                            <Button1
                                text="ADD"

                            //  onPress={() => refRBSheetEditFrom.current.open()}
                            />
                        </View>
                    </View>
                </RBSheet>



            </View>
        </ScrollView>
    );
};



export default CreateInvoice;