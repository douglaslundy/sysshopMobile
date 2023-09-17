import { View, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import { Container, CreateAddBtn, CreateAddBtnText, ListHeight, NoAddress } from './styled';
import DefaultTitle from '../../components/common/DefaultTitle';
import NavBar from '../../components/common/NavBar';
import AddressCard from './AddressCard';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

export interface Address {
  _id: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

const Data: any = [
  {
    _id: "1",
    street: "Rua das Acácias",
    number: "321",
    complement: "",
    district: "Boa Viagem",
    city: "Recife",
    state: "PE",
    cep: "51030200",
  },
  {
    _id: "2",
    street: "Avenida das Flores",
    number: "456",
    complement: "",
    district: "Centro",
    city: "Cuiabá",
    state: "MT",
    cep: "78005100",
  },
  {
    _id: "3",
    street: "Rua das Jabuticabeiras",
    number: "987",
    complement: "",
    district: "Mangabeiras",
    city: "Maceió",
    state: "AL",
    cep: "57037100",
  },
  {
    _id: "10",
    street: "Rua das Acácias",
    number: "10",
    complement: "",
    district: "Boa Viagem",
    city: "Recife",
    state: "PE",
    cep: "51030200",
  },
  {
    _id: "20",
    street: "Avenida das Flores",
    number: "20",
    complement: "",
    district: "Centro",
    city: "Cuiabá",
    state: "MT",
    cep: "78005100",
  },
  {
    _id: "30",
    street: "Rua das Jabuticabeiras",
    number: "30",
    complement: "",
    district: "Mangabeiras",
    city: "Maceió",
    state: "AL",
    cep: "57037100",
  }
];

const AllAddress = () => {

  const navigation = useNavigation<PropsStack>();

  const renderItem: ListRenderItem<Address> = ({ item }) => (
    <AddressCard item={item} />
  )

  const handleNavAddress = () => {
    navigation.navigate("AddAddress");
  }

  return (
    <>
      <Container>
        <DefaultTitle fontSize={18} title="TODOS OS ENDEREÇOS" />
        {
          Data.length <= 0 ?
            (
              <>
                <NoAddress>Você não tem endereços {'\n'} Cadastrados no momento</NoAddress>
                <CreateAddBtn onPress={handleNavAddress}>
                  <CreateAddBtnText>Cadastrar Endereço</CreateAddBtnText>
                </CreateAddBtn>
              </>
            ) : (
              <>
                <ListHeight>
                  <FlatList
                    data={Data}
                    keyExtractor={(item: Address) => item._id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                  />
                </ListHeight>
                <CreateAddBtn onPress={handleNavAddress}>
                  <CreateAddBtnText>Cadastrar Endereço</CreateAddBtnText>
                </CreateAddBtn>
              </>
            )
        }
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;