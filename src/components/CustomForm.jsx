import './CustomForm.css';
import { useState } from 'react';
import CustomCart from './CustomCart';
import '../App.css';


function CustomForm(){
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(''); 
    const [users, setUser] = useState([]);
    const [isSalary, setIsSalary] = useState(false);
    const [isName,setIsName] = useState(false);
    

    function addCustom(e){
        e.preventDefault();

        const newUser = {
            id: Math.floor(Math.random() * 100),
            name: name.toUpperCase(),
            salary:salary
        }
        
        if(name === ''){
            setIsName(true);
        } else if (salary < 10000){
            setIsSalary(true);
        }
        else{
            setIsSalary(false);
            setUser([...users, newUser]);
            setName('');
            setSalary('');
        }
        
    }
    

    return(

        <div className="container">
            <form className="CustomForm">
                <label className="custom-name">
                    Çalışan İsmi:
                    <input type="text" placeholder="Çalışan ismi" required className="input" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="custom-salary">
                    Maaş:
                    <input type="number" placeholder="Maaş girin" required className="input" value={salary} onChange={(e) => setSalary(e.target.value)} />
                </label>
                <button className='custom-save' onClick={addCustom}>Ekle</button>
                {isName ? <div className='warning-msg'>Çalışan isminin girilmesi gerekiyor ! </div> : ''}
                {isSalary ? <div className='warning-msg bottom'>Maaşın asgari tutardan fazla olması gerekiyor ! </div> : ''}
                
            </form>
            <CustomCart users={users} setUser={setUser}/>
        </div>

    )



}

export default CustomForm;