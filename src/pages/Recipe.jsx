import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id]);

    return <>
        {!recipe.idMeal ? <Preloader/> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <h1>{recipe.strMeal}</h1>
                <h6>Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                <p>{recipe.strInstructions}</p>
                {recipe.strYoutube ? (
                        <div className="row">
                        <h5>Video Recipe</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                ): null}
            </div>
        )}
        <button className='btn' onClick={goBack}>Go back</button>
    </>;
}

export {Recipe}