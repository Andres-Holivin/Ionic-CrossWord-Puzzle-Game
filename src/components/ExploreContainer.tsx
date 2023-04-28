import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}
let count = 15
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="">
      <IonGrid >
        {
          [...Array(count)].map((v, j) =>
            <IonRow>
              {
                [...Array(count)].map((v, i) =>
                  <InputSqure position={parseInt((i+(j*count)+1).toString())} />
                )
              }
            </IonRow>
          )
        }

      </IonGrid>
    </div>
  );
};
interface InputSqureInterface{
  position:number
}
export const InputSqure: React.FC<InputSqureInterface> = ({position}) => {
  return (<IonCol className='p-0 border-solid border-2 w-12 h-12' >
    <div className='w-full h-full'>
      <div style={{ "fontSize": "0.6em" }} className=' absolute z-10' >
        {position}
      </div>
      <div className='h-full'>
        <input maxLength={1}
          className='uppercase text-lg text-center bg-transparent
      outline-none w-full h-full'></input>
      </div>
    </div>
  </IonCol>);
}

export default ExploreContainer;
