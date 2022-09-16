/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { InnerContainer, PageTitle, StyledContainer} from '../../components/styles';
import Header from '../appscreens/cartElements/components/Header';
import ItemsContainer from '../appscreens/cartElements/components/ItemsContainer';
import Footer from '../appscreens/cartElements/components/Footer';
import { View } from 'react-native';
import { SplashScreen } from '../../helpers/loader';
import { getData } from '../../helpers/fetchData-helpers';
const ClientCart = ({route, navigation}) => {
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);
    const [total, settotal] = useState();
    useEffect(() => {
        let comp = 0
        const getItem = async()=>{
            let packProducts = null
            let products = null
            let tosend = []
            let pannier = route.params.cart
            let produits = pannier.ligneproduit.filter((item)=> item.produitId != null)
            let packProduits = pannier.ligneproduit.filter((item)=> item.packproduitId != null)
            if(produits.length != 0){
                products = await Promise.all(
                    produits.map((item) => {
                        return getData('produit/' + item.produitId);
                    })
                );
                tosend = [...products.map((produit,id)=>{
                    let ligneproduit = pannier.ligneproduit.filter((ligne)=>ligne.produitId === produit.id)
                    comp = id
                    return {
                        photoURL:produit.photoURL,
                        id,
                        nom:produit.nom,
                        prix:produit.prix,
                        quantite:ligneproduit[0].quantite,
                        produitId:produit.id
                    }
                }), ...tosend]
            }
            console.log('produits', products)
            if(packProduits.length != 0){
                packProducts = await Promise.all(
                    packProduits.map((item) => {
                        return getData('packProduit/' + item.packproduitId);
                    })
                );
                console.log('pack', packProducts)
                tosend = [...packProducts.map((packProduct,id)=>{
                    let lignePack = pannier.ligneproduit.filter((ligne)=>ligne.packproduitId == packProduct.id)
                    return {
                        photoURL:packProduct.photoURL,
                        id:comp + id + 1,
                        nom:packProduct.nom,
                        prix:packProduct.prix,
                        quantite:lignePack[0].quantite,
                        packproduitId:packProduct.id
                    }
                }), ...tosend]
            }
            console.log('tosend',tosend)
            settotal({price:pannier.prix, quantity:tosend.length, id:pannier.id})
            setData(tosend)
            setloading(false)
        }
        getItem()
    }, []);
    if(loading){
        return <SplashScreen/>
    }
    return (
            <StyledContainer>
                <StatusBar style="auto" />
                <InnerContainer>
                    {/* <PageTitle>Client Cart</PageTitle> */}
                    <View style={{ flex: 1 }}>
                        <Header client={route.params.cart.client} />
                        <ItemsContainer data={data} />
                        <Footer total={total} navigation={navigation}/>
                    </View>
                </InnerContainer>
            </StyledContainer>
    );
};

export default ClientCart;
