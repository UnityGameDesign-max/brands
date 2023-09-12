import React, { useEffect } from 'react'
import CaseCard from 'common/components/cases/components/CaseCard';
import { getAllCaseStudies } from 'providers/casesProvider';
import './caseStudy.scss'

function CaseStudy() {
    // const [imgUrl, setImgUrl] = useState('');
    // const [caseTitle, setCaseTitle] = useState('');
    // const [caseDescription, setCaseDescription] = useState('');

    useEffect(() => {
        function getCaseStudies(){
            getAllCaseStudies().then((res) => {
                console.log(res)
            })
        } 
        getCaseStudies();
    },[])
  return (
    <div className='container pd-vertically-2'>
        <p><span class="title1--mod"></span> Case studies</p>

        <div className='cases'>
            <CaseCard
             bgImage={'https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg'}
             caseTitle={'The Olympian'} 
             caseDescription={'The only athlete in the world to do her Olympic routine in 2020. '}
            />

            <CaseCard
             bgImage={'https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg'}
             caseTitle={'The Savings Jar'} 
             caseDescription={'Grow your savings treasure and grow your dragon.'}
            />
            
            <CaseCard
            className='centered-card'
            bgImage={'https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg'}
            caseTitle={'Skhokho seMali'} 
            caseDescription={'Helping South Africans become CashCleva with Skhokho and TymeBank'}
            />
        </div>
    </div>
  )
}

export default CaseStudy