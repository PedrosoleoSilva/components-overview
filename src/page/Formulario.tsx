import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import batImagi from "../assets/Batman-Logo-2016.png";
const Formulario = () => {
    return (
        <View style={styles.colorTela}>
            <StatusBar/>
            <View style={styles.paddinImage}> 
            <View style={styles.conatinerImagens}>
                <Image source={batImagi} style={styles.formatoImagens}/>
            </View>
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                style={styles.inputText}
                    placeholder="NOME"
                />
            </View>
            <View style={styles.inputStyle}>
                <Text style={styles.textStyle} >Label</Text>
                <TextInput
                style={styles.inputText}
                    placeholder="TELEFONE"
                />
            </View>
            <View style={styles.inputStyle}>
                <Text style={styles.textStyle} >Label</Text>
                <TextInput
                style={styles.inputTextduo}
                    placeholder="Informe seu endereço"
                />
            </View>
            <View style={styles.inputStyle}>
                <Text style={styles.textStyle} >Label</Text>
                <TextInput
                style={styles.inputTextduo}
                    placeholder="Observações"
                />
                <Text style={styles.textStyle}>Informações estão corretas?</Text>
            </View>
            <View style={styles.container}> 
            <Pressable style={styles.buttonStyle} onPress={()=>{ console.log('Enviado com Sucesso')}}>
                <Text style={styles.texto}>ENVIAR</Text>
            </Pressable>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    formatoImagens: {
        width: 120,
        height:80,

    },
    colorTela: {
        backgroundColor: '#fff'
    },
    conatinerImagens:{
        width: 130,
        height:100,
        backgroundColor: '#ffff',
        color: 'black',
        borderWidth:1,
        elevation: 5,
        alignItems: 'center',
        marginHorizontal: 10
    },
    paddinImage: {
        paddingTop:5
    },
    inputText: {
        width: 330,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    inputTextduo: {
        width: 330,
        height: 120,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        textAlign: 'left',
        fontSize: 18,
    },
    inputStyle:{
        paddingTop: 20,
        paddingLeft: 30,
    },
    textStyle: {
        fontSize: 18,
        padding: 5
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        color: "#ffff",
        fontWeight: 'bold',
    }, 
    buttonStyle: {
        alignItems: 'center',
        elevation: 3,
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 5,
        width: 150,
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 1
    },
})

export default Formulario;