import shoesData from "../data/shoes.json";

export const getShoeData = ({params}) => {
    const shoeID=params.shoeID
    // console.log(shoeID);
    const shoe= shoesData.find((item)=>item.id===Number(shoeID))
    return shoe || null

};
