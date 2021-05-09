import { useGo } from "hooks";
import styles from "./styles.module.scss";

const AddressRestaurant = ({ id, name, logoUrl, deliveryTime, shipping }) => {
// const AddressRestaurant = () => {

    const go = useGo();

    return (
        <div className={styles.container} onClick={() => go.restaurant(id)}>
            {name ? (
                <>
                    <div className={styles.infoContainer}>
                        <h3 className={styles.title}>{name}</h3>
                        <div className={styles.values}>
                        <p className={styles.textLeft}>{name}</p>
                        <p className={styles.textLeft}>{`${deliveryTime - 10} - ${deliveryTime} min`}
                        </p>
                        </div>
                    </div>
                </>
            ) : (
                "Loading...2"
            )}
        </div>
    );



    // return (
    //     <div>
    //         ENDEREÇO DO RESTAURANTE2
    //     </div>
    
    // )


};

export default AddressRestaurant;
