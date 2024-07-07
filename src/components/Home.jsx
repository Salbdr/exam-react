import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
    const {id}= useParams()
    // const {name}= useParams()
    const [products, setProducts] = useState([])
    const fetchProducts =async ()=>{
        const response =await axios.get ("https://fakestoreapi.com/products")
        setProducts(response.data)
        console.log(response.data);
    }
    useEffect(() => {
      fetchProducts()
    }, [])

    const [search, setSearch]= useState("")
    const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))

    const deleteProduct = (id)=>{
        const updatedProducts = products.filter((item)=> item.id!== id)
        setProducts(updatedProducts)
    }
    const [welcom, setWelcom]= useState("")
    const fetchUser=async ()=>{
        const response= await axios.get(`https://667efc31f2cb59c38dc7b090.mockapi.io/users`)
        const hi = response.data.find((item)=> item.id === id)
        console.log(hi);
        setWelcom(hi)


    }
    useEffect(() => {
      fetchUser()
    }, [])
    
    
  return (
    <>
    <div className='flex flex-row justify-between bg-[#131921] h-16 p-2'>
        <img className='bg-transparent w-36' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAK0AuAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgBBQYDBAL/xABKEAABAwMBBAQHCwoFBQEAAAABAAIDBAURBgcSITETQVFhFiJVcYGS0ggUMlJykaGxssHRFSMzNjdCYnN0szVUdYKUF0RTk/Ak/8QAGQEBAQADAQAAAAAAAAAAAAAAAAMBBAUC/8QALREBAAEDAgIIBgMAAAAAAAAAAAECAxEEEiExBRVBUXGRsdETImGhwfAUIzP/2gAMAwEAAhEDEQA/AJxREQEREBFjI7QsoCIiAiIgIiICLGR2rKAiIgIiICIiAiL85QZKIiDKIiAiIg8nA5PBeg5BZRAREQEREBERB5vBLuS/bPghZRAREQEREBYyix1oGVnCLKAiIgIogZt8s28Oks1wazPNrmE/NkLuNJa909q0mO1VmKoN3nUs7dyQDzcj6CUHToi4u+bUNK2K61FsuFZM2qpyGyNZTvcASAeeO9B2iLmrdrvTlw09U3+K4CO200hillmjczdeADjBGScOGAM5yuQm276XZUmNlHdJIgcdK2JgB7wC7KCVEWp01qS1antwrrLVNnhzuvGC10buxzTxBXL6n2uaX0/WPojLPX1Mbt2RlGwODD2FxIGfNnCDvkXB6X2taY1FVso2yz0NTI7djZWMDRI7qAcCRnuJGV3iAi8qqogpKeSoqpo4YIml0kkjg1rAOZJPIKOLztu0rb5jDRNrLiRwL4Iw1mfO4gn0DCCTEURU23uxPkAqbTcYmE/CYWPx6MhSHpjVVl1TSunslcycM/SRkFr4/lNPEefkUG6RFwNftf0hQV1RRz1NT0tPK6J+7TOI3mnBx6Qg75FHX/WnRn+ZrP8AiuT/AK06M/zNX/xXIJExxWVpdK6nterLc+vs0r5II5TE/fjLCHAA4we4hbWqqIKSnkqKqaOGCJpdJJI4NawDmSTyCD1RRrdttuk6CcxU3v2vwcGSniAZ87yM+gL1se2fSV0nbDPLU257jgOrIwGH/c0kDznCCRUX5jeyRjXxua5jhlrmnII7QiCuWsNjFx07Yqi60l0iuDKdpfPH0Bic1g5lvjHOOZ5cFGlBW1NurYa2hmfBUwPD45GHi0hTRqrbdbbpYrjbKCz1eaymkpxJPI1m5vtLd7AznGc4UIILo6fuIvFit9zDdz33TRzbvxd5oOPpVXNrf7Rr5/PH2GqyGzj9QrB/QRfZCrftb/aNfP54+w1BrrNDfNQ0cGmLPTSVLW1ElZ0MfAFxaxu84ngAA3AJ+Me1eGotNXnTNTHT3ygkpJJW70e8Q5rx14c0kHHWM8MhTD7mqkjFFfKzdHSOliiDusAAnH0/Qtj7o+FjtIW+Ygb7Lg1oPXgxvyPoHzIIQ05qa56bFf8Akucxe/qZ1PJgkYB/eGP3hxwerJX2jZ/qw2j8rfkOp95bnSbx3d7d553M72MceS+LRlLHW6vslLM0Oilr4GPa4ZBaXjIVyOaCjytvsvvE990Haa+rcX1BidHI4nJcWOLMnvO7n0qqNzY2O5VccbQ1jZ3hoHUA4qzmw79mdr+VP/degjXb/quorL94N00rmUVG1rp2Dh0srhvDPaACMd5K5bZ7s8uWt5J5KeaOkoYHBslTI0u8YjO61vWeXWOasjftP6XqRPcb9bLW7Dcy1VTEwEAcOLz+K4iPafs90lTyUNgglki6Qvcygp8NL+AJy8jPIcRnkgjPaFssr9GUEdxbXR19EXiOR7YjG6Nx5Zbk8D25XOaHvtRpzVNvuNPI5jWzNZMAeD4iQHNPo+kA9S73aLtcotVacqLNRWmoiEz2O6aaVvi7rg74IBzyxzUSnkgvCq8X/Yzqqtvtxq6d1vMNRVSyxkzkHdc4kZG73qwzfgjzLEj2RRuklc1jGAuc5xwABzJKCqmp9md90tanXO7zW9kDXBjWtnJdI48g0Y4nmfMCuLPau22ra2frG/n3s9wtVISylYeG92yHvP0DHevv2NaF8Kb17/uEQdaKF4MgcOE8nMR+bkT3YHWglnYXY6yy6Ha6vZ0b66odVMjIwWsLWtbnzhufMQoz2561nu99lsFFMW22gfuShp/TTD4We5vIDtBPZixNXMKakmnI4RRufjzDKpRUzyVVRLUTuLpZXl73HrcTklB1uz/Z5c9bunlpZoqWip3bslRKCcuxndaBzPLPLmvn19oW5aJrYYa58c9PUNJgqIsgOxzBB5EZHz8+anrYXTsh2a26RgAM8k0j+89I5v1NC1nuiKVs2iKeo/ep65hB7i1wI+kfMg5PYJraeC4t0tcJS+lnDnURcc9E8cSz5JGT5x3ooosde613qguDCQaWpjm4fwuB+5EFgb9sp0hZdIXaqht8s1VS2+aRk81Q8u3mxkh2AQ3OR2KuKnvaztSs8+nqiy6dqhWVFa3o5powQyKM/CGTzJHDh2lQIgt9s4/UKwf0EX2Qq37W/wBo18/nj7DVNWwvVEN60nHannFbamiJ4xwdGSdxw9AwfN3qFtrQztHvgAyTO37DUEoe5s/wK8/1TPsL7PdFgO0ZR8cbtxYfP+bkXx+5wYW2O8NPP30z7C+v3Ro3dFUAHlJn9uRBCuz79etP/wCowfbCuCqfbPv160//AKjB9sK4KClN2/xWt/qJPtFWa2HfsztXyp/7r1WW7f4rW/1En2irNbDv2Z2r5U/916CHds+sKm/6nqbbDM9tst0hhZE04bJI04c89pzkDuHDmVnZNs5ZrSSprLjPJBbKZ4jPRY35X4zugnkAMZPeFyOraeWk1TeKecOEkdbMHbw5+OePp5qTNhmu7Np+3VtnvdQKQS1HviGd7SWuJaGlpI5fBBGe1BttqWzzS2m9CVldarcY6xj4gyZ873Hi8A8Cccs9Sgc8lLm2baJb9SQwWOwzGakZL0k9SQWte4cA0Z44GSc9fDCiNBeBvwR5lC+3rXPveE6Vtcv52VodXyMdxY08RH6eZ7sDrK7nS2so7/oCS+04HvqlppPfER/dmYzJHmPAjuIVU6uqnraqarq5XS1E7zJJI7m5xOSSg2GmLDW6lvdNarczMszvGeR4sbetx7gPwVudN2Sj05ZaW1W9uIKdm7vHm93W495PFUzjkfG7eje5h7WnC3Fs1ZqK1SNfQXuvh3eTRO4t9LTwPzILe3WF1Ra6yFnwpIHsHnLSFSgKzuxjWty1faa0XgROqaJ7G9PG3d6UOB4kDhngeWBx5KDtqGnJdNayr6YsIpp5DUUrsYBjcScDzHLfQgnrYg8O2ZWgDmwzg/8AuefvXwe6BkazZ+WuIy+sia3vPE/cuJ2KbQrbYbfUWO/VJpoTKZqadwJaMjxmHA4csg957l8O2vX1Bqd1HarJKZ6KlkMss5aQJJMYG7njgAu49eUEYU8L6meOCIZkleGNHaScBF3GxnTUmoNaUszmE0dtc2pnd1ZByxvpcOXYCiDvtE7D46OqjrdV1MNUY3bzaKnyY3Hq33EAkdwA85HBY1vsVkuupRXafqaako6p+9VRSA/mHdbmADiD8Xhg9eDwmhEGj0lpa1aTtbaC0w7vIyzO4yTO7XH7uQ6lF2t9k2ob1q25Xa3zW3oamQOj6aV7XDxQDkBh6x2qWLu25QyCrt8hka1uH05GQR2jvXnb9R0dVhk597y9jz4vz/itadXbpufDr4T2Z5T4StFiuqjfTxj0c3si0Zc9G2uvgu81NJNUziRvvdxcAA3HEkBe+1vSVfrLTlPQWuWnjnhq2z/n3FrSA1zSMgHj4y7UEOAIOQesLK2UUBaT2N6ltWp7Vcayotvvekqo5pNyZ5cQ1wOAN3nwU+oiCutx2IapnuFVNDUWsxyTPc0mZ4JBJI4bimTZvYKvTGjqG0XB8L6mAyF5hcS3xnucMEgdRHUumRBGW07ZTFqyqN1tM8dJdC0CUSA9HPjgCSOIdjhnjwAUZt2JaxMu4WUAbn9Ianh9WfoVmUQRZoHY5b7DIK7UD4bnW48WIMzBFkYPA/DPeQPNnitDPsHL9Uu6KvbHp9x3+BzO0f8AjGRj/cfmKnFEGpg09b6PTktitsLaSjfA+ECMZI3mkFxzzPHOTzXDad2KaZtUYlvD5bpOBxMruiiHma05+clSa/eLHbmN7HDPLK5+p09VVr9+tuRefiiPgPMMqF+5coj+ujdPjEK2qKKp+erEPBum9DQt3PyPYOHx6eEn5yF8Ny2a6HvkLhHbKaF+OEtA/oy3vw3xfnBWwdpIbp3Kw72OAdHw+tamxMey+wRt4ObIQ7HcDlc+rXam1cppu28RVOObbjS2a6KqrdfL6Pt2eaDg0O25R01dLVR1kjHNEjA0xhoOASOZ4njgeZfbrjRlr1nbG0lya6OWIl1PUx434XHnjtBwMjr84BHRouu56tF42JasopXCgbS3GLPiujmEbiO8Pxg+kr3sWw7UtbOw3eSmttP+/wCOJZMdwbw+lWQRBptKaZtmlLSy22mItjB3pJH8Xyu63OPWf/gi3KIPzvDtX6XnunsXogLT3ewwV+ZYsRVHxscHecfetwiles271Oy5GYe7dyu3VupnEuDL7pZJQwufEM8BnLHebqWzpNVuAAq6YH+KI4+g/iummijmjMczGvYebXDIWhrtLQSZdRSGF3xHcW/iFyatHq9Nx01eY7p/cejoU6nT3uF6nE98Pup79bZ8YqBG49Ug3fp5LYRyxyjeikY8drXZXB1VluFLkvp3PaP3o/GH4r4BljuGWuHoIUet79qcXrf491Or7Vzjbr/KTkUdR3CtjGGVc4H8wr2berk3lWSekA/crR03a7aZ+yc9F3OyqHfouB/Ldz/zj/Vb+C833W4P+FWz+h2PqWZ6bs9lM/b3I6Lu9swkEkAZJwF8dRdaCn/S1UWR1NdvH5guAklklI6WR8hPxnEr7KWz19Vjo6Z7W/Gk8UfSpdcXbk4s28z5+j31dRRxuVt/Vaqp2ZFLC+U9rvFH4rVm5Xe7ydBTktHW2HxQB3nmtjQ6VjZh1bL0h+IzgPn5/UughhhpohHDG2Ng5NaMK1Gn1uo436ttPdH77p1XtNZ/ypzPfLW2+k/ItsmfLKZHAGR3YDjkFqNJUr5aqWsf+6C0H+I8/o+tbu809RXUzaenIa17x0jyeTR9fUvroqWOjpmQQjDWj0k9q2P4ub9ERGKKI4eMo/HxaqzPzVej3REXRaYiIgIiICIiAiIgIixlAyvKalp6gfn4IpPlMBXqOKysTETGJZiZjjDVyaftkn/bbp/gcR968HaXtx5dM3zSLdoterR6arnRHkrGpvRyqnzaRul7cOZnPnevePT9sjx/+beI+M4n71tESnRaanlRHkTqb086p83jBSU1P+ggjj+SwBeyItiKYpjEJTMzxkWCAeayiywIiICIiAiLGUGUWEQZREQERflBnmgCALKAiIgIiICIiDGVlEQEREBERARFgoBKAIAsoCIiAirZLrbWMIiMt6q2iWMSsyGeMwkgHlyyD8y8/D3Vnl6q9Vnsr1tYysqv0q0eHurPL1V6rPZTw91Z5eqvVZ7KbTKy6KtHh7qzy9Veqz2U8PdWeXqr1Weym0ysuirR4e6s8vVXqs9lPD3Vnl6q9VnsptMrLoq0eHurPL1V6rPZTw91Z5eqvVZ7KbTKy6KtHh7qzy9Veqz2U8PdWeXqr1Weym0ysuirR4e6s8vVXqs9lPD3Vnl6q9VnsptMrLoq0eHurPL1V6rPZTw91Z5eqvVZ7KbTKy6KtHh7qzy9Veqz2U8PdWeXqr1Weym0yssgCrT4e6s8vVXqs9lPD3Vnl6q9VnsptMrLoq0eHurPL1V6rPZTw91Z5eqvVZ7KbTKy6KtHh7qzy9Veqz2UTaZfm/6m/K9upqRkNRCYC7MjqnfM4cST0mGjecMjB+Vw48OdRF7eRERAREQEREBERAREQEREBERAREQEREBERAREQf/Z" alt="" />
    
    <input className='bg-transparent' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search by product name"/>
    <div>

    <h1 className='text-white text-xl'>Welcome {welcom.name}</h1>
    <button className='border-2 shadow-2xl hover:bg-red-600 w-40 rounded-full bg-white'>logout</button>
    </div>
    
    </div>
   
    <div className='grid grid-cols-3 gap-8 mt-5'>
        {filteredProducts.map((item)=>(
            <div className='flex flex-col shadow-2xl  p-3 rounded-md'>
                <Link to ={`/product/${item.id}`}>
                <img src={item.image} alt={item.title}/>
                </Link>
                
                <h1>{item.title}</h1>
                <p>${item.price}</p>
                <div className='flex flex-row justify-between pt-11'>
               <Link to = {`/product/${item.id}`}> 
               <button className='border-2 text-xl rounded-md bg-blue-400 hover:bg-blue-950'>Viw details</button>
                </Link>
                
                <button className='text-xl border-1 rounded-md hover:bg-red-700 bg-red-300' onClick={()=>deleteProduct(item.id)}>Delete</button>
                </div>
                
            </div>

           
        ))}
    </div>
    </>
  )
}

export default Home