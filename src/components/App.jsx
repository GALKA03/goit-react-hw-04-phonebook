import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { Conteiner } from "./App.styles";
import { Filter } from "./Filter/Filter";
import Form from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? ''
  })
console.log('[contacts, setContacts] ',[contacts, setContacts] )
  useEffect(() => {
    console.log('contacts useEffect')
  window.localStorage.setItem('contacts',JSON.stringify(contacts))
}, [contacts])
  const [filter, setFilter] = useState('')
  console.log('[filter, setFilter]',[filter, setFilter] )
  

  // const valueFilter = () => {
  //  contacts([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]) 
  // } 
//console.log(valueFilter)
  const handleAddFilter = () => {
  return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter),
    );
  }
  
  const addContacts = (name, number) => {
  const showContacts = { name, number, id: nanoid() };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  else if (!name || !number) {
         alert('some file is empty')
            return false;
    }
    
    else {
       setContacts(contacts => [showContacts, ...contacts]) 
   
    }
    
  }

  const  deliteContacts = (id) => {
  setContacts(prevContacts => prevContacts.filter((contact) => contact.id !== id))

    }
 const HandleChangeFilterInput = e => {
//[e.target.name]: e.target.value,
setFilter(e.target.value)
}
  
       

    
    
 
   // const addFilter = this.handleAddFilter()
    return (
      <Conteiner>
        <h1 style={{
          textAlign: 'center',
          color: 'red',
          bacgroundColor: 'green',
        }}>Phonebook</h1>
         <Form addContacts={addContacts} />
        <h2 style={{
          textAlign: 'center',
          color: 'red',
        }}>Contacts</h2>
         <Filter filter={filter} onChange={HandleChangeFilterInput} /> 
         <Contacts contacts={handleAddFilter} onRemove={deliteContacts} /> 
      </Conteiner>

    )
  
      }







// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   }
//   componentDidMount() { 

//     const cntacts = localStorage.getItem('contacts',)
// const pars = JSON.parse(cntacts)
//     console.log(pars)
//     //если быд бы 0 все сломылось юы
//     if (pars) {
//      this.setState({contacts: pars}) 
//     }
    
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate')
//     if (this.state.contacts !== prevState.contacts) {
//      console.log('newUpdate')
//    }
//     // console.log('prevState=перед обновлением',prevState)
//   //  console.log('prevProps=после обновления, актуальный стейт', this.state);
    
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//   }


//   addContacts = ({ name, number }) => {
//     const showContacts = {name, number, id: nanoid(),}
//     console.log(showContacts)
//     const { contacts } = this.state;
//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     else{
//        this.setState(({ contacts }) => ({
//         contacts: [showContacts,...contacts]
        
//         }))
//       }
    
// }
//   deliteContacts = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id)
//     }))
//   }
//   HandleChangeFilterInput = e => {
//     this.setState({
//       [e.target.name]: e.target.value,

//     })
//   }
//   handleAddFilter = () => {
//    const { filter, contacts } = this.state;
//     //const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(elem =>
//       elem.name.toLowerCase().includes(filter),
//     );
//   }

// render() {
//   //const { contacts } = this.state;
//   const { filter } = this.state;
//   const addFilter = this.handleAddFilter() 
//     return (
//              <Conteiner>
//         <h1 style={{
//           textAlign: 'center',
//           color: 'red',
//         bacgroundColor:'green',
//         }}>Phonebook</h1>
//         <Form  addContacts={this.addContacts} />
//         <h2 style={{
//           textAlign: 'center',
//           color: 'red',
//         }}>Contacts</h2> 
//         <Filter filter={filter} onChange={this.HandleChangeFilterInput} />
//           <Contacts  contacts={addFilter} onRemove={this.deliteContacts} />
//       </Conteiner>

//     )}
// }





