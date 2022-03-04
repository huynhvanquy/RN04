import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';
import BackgroundView from './components/BackgroundView';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class DemoCallAPI extends Component {

    // componentDidMount(){
    //     fetch('http://svcy3.myclass.vn/api/Product')
    //     .then(response => response.json())
    //     .then(data => console.log('result', data))
    //     .catch(err => console.log(err));
    // }

    state = {
        listProduct: [],
        listCategory: []
    };

    // componentDidMount() {
    //     const getListProduct = () => axios({ method: 'GET', url: 'http://svcy3.myclass.vn/api/Product' });
    //     const getListCatagory = () => axios({ method: 'GET', url: 'http://svcy3.myclass.vn/api/Product/getAllCategory' });

    //     Promise.all([getListProduct(), getListCatagory()])
    //         .then(response => {
    //             const [responseListProduct, responseListCategory] = response;
    //             this.setState({
    //                 listProduct: responseListProduct.data.content,
    //                 listCategory: responseListCategory.data.content
    //             });
    //         })
    //         .catch(err => console.log(err));
    // }

    fetchAPI = async () => {
        try {
            const listProduct = () => axios({ method: 'GET', url: 'http://svcy3.myclass.vn/api/Product' });
            const listCategory = () => axios({ method: 'GET', url: 'http://svcy3.myclass.vn/api/Product/getAllCategory' });;

            const [responseListProduct, responseListCategory] = await Promise.all([
                listProduct(),
                listCategory()
            ]);
            this.setState({
                listProduct: responseListProduct.data.content,
                listCategory: responseListCategory.data.content
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchAPI();
    }

    renderListCategory = () => {
        return this.state.listCategory.map(item => {
            return (
                <Text style={styles.catalogyText} key={item.id} onPress={() => this.onPressCategory(item.id)}>
                    {item.category}
                </Text>
            );
        })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.productItemContainer}>
                <AntIcon name='hearto' size={30} style={styles.productIcon} />
                <Image style={styles.productImage} source={{ uri: item.image }} />
                <Text style={styles.productNameText}>{item.name}</Text>
                <Text style={styles.productPriceText}>{item.price}</Text>
            </View>
        );
    }

    onPressCategory = (categoryId) => {
        const listProduct = [];
        axios({ method: 'GET', url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}` })
            .then(response => this.setState({ listProduct: response.data.content }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <BackgroundView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <AntIcon name='close' size={40} color="#fff" />
                            <AntIcon name='filter' size={40} color="#fff" />
                        </View>
                        <ScrollView style={{ marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>{this.renderListCategory()}</ScrollView>
                        <FlatList data={this.state.listProduct}
                            renderItem={this.renderItem}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 230 }} />
                    </View>
                </SafeAreaView>
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    headerContainer: {
        height: 50, backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    catalogyText: {
        color: '#fff', textTransform: 'capitalize', fontSize: 22, marginRight: 30
    },
    productItemContainer: {
        padding: 15,
        backgroundColor: '#fff', height: 200,
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 10,
        shadowColor: 'red', shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 10, elevation: 3,
        marginBottom: 15,
    },
    productNameText: {
        fontSize: 22,
        fontWeight: '600',
    },
    productPriceText: {
        fontSize: 18,
    },
    productImage: {
        height: 100, width: 200,
    },
    productIcon: {
        alignSelf: 'flex-end'
    }
});