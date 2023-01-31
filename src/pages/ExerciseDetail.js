import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Details } from '@mui/icons-material'
import Detail from '../components/Detail'
import ExercisesVideo from '../components/ExercisesVideo'
import SimilarExercises from '../components/SimilarExercises'
import HeroBannerImage from "../assets/images/banner.png";
import { fetchData, optionsYTP } from '../utils/fetchData'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({
    name:'cat',
    text:'Every web developer needs to know how to use APIs in their applications. Learn how to create the best and most modern Fitness Exercises App using two separate APIs!',
    img:HeroBannerImage
  })
  const [exercisesVideo, setExercisesVideo] = useState([])
  const {id}= useParams()
  useEffect(() => {
    const fectchExerciseData= async()=>{
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const l="45 side band"
    const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${l} exercise`, optionsYTP);
    setExercisesVideo(exerciseVideoData);
    }
    fectchExerciseData()
   
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
        <ExercisesVideo exercisesVideo={exercisesVideo} name={exerciseDetail.name}></ExercisesVideo>
        <SimilarExercises similarExercises={exerciseDetail}></SimilarExercises>
    </Box>

  )
}

export default ExerciseDetail
