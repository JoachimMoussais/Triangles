function cote(left,right,bottom)
{
    
    if(left === right && right === bottom)
    {
        return 'triangle equilateral';
    }

    if(left === right || left === bottom || right === bottom)
    {
        if(left > (right + bottom ))
        {
            return 'triangle impossible'
        }
        else if(right > (left + bottom ))
        {
            return 'triangle impossible'
        }
        else if(bottom > (right + left ))
        {
            return 'triangle impossible'
        }
        else
        {
            return 'triangle isocèle;'
        }
    }

    if(left !== right || left !== bottom || right !== bottom)
    {
        //retourne la plus grande valeur
        

        if(left > (right + bottom ))
        {
            return 'triangle impossible'
        }
        else if(right > (left + bottom ))
        {
            return 'triangle impossible'
        }
        else if(bottom > (right + left ))
        {
            return 'triangle impossible'
        }
        else
        {
            return 'triangle scalène'
        }
    }
}





          