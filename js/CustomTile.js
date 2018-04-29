function level1_Tile () { 
    
    //Dibujamos suelo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Paja(i, background_height -block_size, block_size, pajaMaterial);
        cubo = createCubo_Paja(i, background_height, block_size, pajaMaterial);
    }

    //Dibujamos techo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Paja(i, 0, mundo, block_size, pajaMaterial);
            
    }

    //Dibujamos limite izdo
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Paja(0, i, block_size, pajaMaterial);
        
    }

    //Dibujamos limite dcho
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Paja(background_length -block_size, i, block_size, pajaMaterial);
        
    }

    //Ponemos el resto de cubos
    cubo = createCubo_Paja(400, 950, block_size, pajaMaterial); 
    cubo = createCubo_Paja(200, 950, block_size, pajaMaterial);
    cubo = createCubo_Paja(1000, 950, block_size, pajaMaterial);
    cubo = createCubo_Paja(1050, 950, block_size, pajaMaterial);
    cubo = createCubo_Paja(1100, 950, block_size, pajaMaterial);
    cubo = createCubo_Paja(1150, 950, block_size, pajaMaterial);
    
    cubo = createCubo_Paja(850, 700, block_size, pajaMaterial);
    cubo = createCubo_Paja(850, 650, block_size, pajaMaterial);
    
    cubo = createCubo_Paja(650, 850, block_size, pajaMaterial); 
    cubo = createCubo_Paja(550, 850, block_size, pajaMaterial); 
    //cubo = createCubo_Paja(700, 800, 50, pajaMaterial); 
    cubo = createCubo_Paja(650, 800, block_size, pajaMaterial); 
    cubo = createCubo_Paja(600, 800, block_size, pajaMaterial); 
    cubo = createCubo_Paja(550, 800, block_size, pajaMaterial); 
    
    for(i = 800 ; i <= 1100 ; i = i+block_size){
        cubo = createCubo_Paja(i, 800, block_size, pajaMaterial);
        
    }
    
    for(i = 50 ; i <= 1050 ; i = i+block_size){
        cubo = createCubo_Paja(i, 750, block_size, pajaMaterial);
        
    }
    
    cubo = createCubo_Paja(1050, 700, block_size, pajaMaterial); 
    cubo = createCubo_Paja(500, 700, block_size, pajaMaterial); 
    cubo = createCubo_Paja(250, 700, block_size, pajaMaterial); 
    cubo = createCubo_Paja(150, 700, block_size, pajaMaterial); 
    cubo = createCubo_Paja(50, 700, block_size, pajaMaterial); 
    cubo = createCubo_Paja(250, 650, block_size, pajaMaterial); 
    cubo = createCubo_Paja(150, 650, block_size, pajaMaterial); 
    cubo = createCubo_Paja(50, 650, block_size, pajaMaterial); 
    
    cubo = createCubo_Paja(800, 550, block_size, pajaMaterial); 
    cubo = createCubo_Paja(900, 550, block_size, pajaMaterial); 
    cubo = createCubo_Paja(1000, 550, block_size, pajaMaterial); 
    cubo = createCubo_Paja(1100, 550, block_size, pajaMaterial); 
    
    cubo = createCubo_Paja(50, 400, block_size, pajaMaterial);
    cubo = createCubo_Paja(50, 250, block_size, pajaMaterial);
    cubo = createCubo_Paja(100, 250, block_size, pajaMaterial);
    cubo = createCubo_Paja(250, 300, block_size, pajaMaterial);
    cubo = createCubo_Paja(300, 300, block_size, pajaMaterial);
    cubo = createCubo_Paja(400, 200, block_size, pajaMaterial);
    cubo = createCubo_Paja(450, 200, block_size, pajaMaterial);
    
    for(i = 750 ; i <= 1150 ; i = i+block_size){
        cubo = createCubo_Paja(i, 400, block_size, pajaMaterial);   
    }
    
    cubo = createCubo_Paja(800, 300, block_size, pajaMaterial);
    cubo = createCubo_Paja(900, 250, block_size, pajaMaterial);
    cubo = createCubo_Paja(1000, 200, block_size, pajaMaterial);
    cubo = createCubo_Paja(1100, 150, block_size, pajaMaterial);
    cubo = createCubo_Paja(1150, 150, block_size, pajaMaterial);
}

function level3_Tile () { 
    
    //Dibujamos suelo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Hierba(i, background_height -block_size, block_size, hierbaMaterial);
        cubo = createCubo_Hierba(i, background_height, block_size, hierbaMaterial);
    }

    //Dibujamos techo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Hierba(i, 0, mundo, block_size, hierbaMaterial);
            
    }

    //Dibujamos limite izdo
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Hierba(0, i, block_size, hierbaMaterial);
        
    }

    //Dibujamos limite dcho
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Hierba(background_length -block_size, i, block_size, hierbaMaterial);
        
    }
    
    //Planta 1
    cubo = createCubo_Hierba(250, 1100, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(350, 1100, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(300, 1050, block_size, hierbaMaterial);
    
    cubo = createCubo_Hierba(700, 1150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(900, 1150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1100, 1150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1250, 1150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1450, 1150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1450, 1100, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1450, 1050, block_size, hierbaMaterial);
    //cubo = createCubo_Hierba(1450, 1000, block_size, hierbaMaterial);
    
    for(i = 500 ; i <= 1400 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 1050, block_size, hierbaMaterial);   
    }
    
    for(i = 700 ; i <= 1200 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 950, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(1200, 900, block_size, hierbaMaterial);   
    
    for(i = 0 ; i <= 1650 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 850, block_size, hierbaMaterial);   
    }
    
    for(i = 1800 ; i <= 2200 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 850, block_size, hierbaMaterial);   
    }
    
    for(i = 1400 ; i <= 2200 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 900, block_size, hierbaMaterial);   
    }
    
    for(i = 1800 ; i <= 2000 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 800, block_size, hierbaMaterial);   
    }
    for(i = 2100 ; i <= 2250 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 800, block_size, hierbaMaterial);   
    }
    
    //Planta 2
    //Piramide
    for(i = 1300 ; i <= 1600 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 800, block_size, hierbaMaterial);   
    }
    for(i = 1350 ; i <= 1550 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 750, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(1400, 700, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1450, 700, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1500, 700, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1400, 650, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1450, 650, block_size, hierbaMaterial);
    
    //Seccion Izda
    for(i = 0 ; i <= 400 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 650, block_size, hierbaMaterial);   
    }
    for(i = 550 ; i <= 700 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 650, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(200, 750, block_size, hierbaMaterial); 
    cubo = createCubo_Hierba(300, 750, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(450, 750, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(500, 750, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(450, 800, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(500, 800, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(700, 700, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(700, 750, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(700, 800, block_size, hierbaMaterial);
    
    //Planta 3
    for(i = 50 ; i <= 200 ; i = i+block_size){
        cubo = createCubo_Hierba(50, i, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(250, 400, block_size, hierbaMaterial);
    
    for(i = 700 ; i <= 2100 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 400, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(700, 450, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(700, 500, block_size, hierbaMaterial);
    
    //Piramide 2
    cubo = createCubo_Hierba(850, 350, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1300, 350, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1350, 350, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(900, 300, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1300, 300, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(950, 250, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1000, 200, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1200, 200, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1050, 150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1150, 150, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(1100, 100, block_size, hierbaMaterial);
    
    cubo = createCubo_Hierba(2100, 450, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(2100, 500, block_size, hierbaMaterial);
    
    for(i = 2100 ; i <= 2400 ; i = i+block_size){
        cubo = createCubo_Hierba(i, 550, block_size, hierbaMaterial);   
    }
    cubo = createCubo_Hierba(2400, 200, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(2350, 200, block_size, hierbaMaterial);
    cubo = createCubo_Hierba(2300, 200, block_size, hierbaMaterial);
}
function level5_Tile () { 
    
    //Dibujamos suelo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Nube(i, background_height -block_size, block_size, nubeMaterial);
        cubo = createCubo_Nube(i, background_height, block_size, nubeMaterial);
    }

    //Dibujamos techo
    for(i = 0 ; i< background_length ; i = i+block_size){
        cubo = createCubo_Nube(i, 0, mundo, block_size, nubeMaterial);
            
    }

    //Dibujamos limite izdo
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Nube(0, i, block_size, nubeMaterial);
        
    }

    //Dibujamos limite dcho
    for(i = background_height ; i >= 0 ; i = i-block_size){
        cubo = createCubo_Nube(background_length -block_size, i, block_size, nubeMaterial);
    }
    
    //Planta 1
    for(i = 2100 ; i <= 2450 ; i = i+block_size){
        cubo = createCubo_Nube(450, i, block_size, nubeMaterial);    
    }
    cubo = createCubo_Nube(500, 2100, block_size, nubeMaterial);
    cubo = createCubo_Nube(50, 2100, block_size, nubeMaterial);
    cubo = createCubo_Nube(50, 2050, block_size, nubeMaterial);
    cubo = createCubo_Nube(100, 2050, block_size, nubeMaterial);
    
    for(i = 0 ; i< 250 ; i = i+block_size){
        cubo = createCubo_Nube(i, 2000, block_size, nubeMaterial);
    }
    
    for(i = 0 ; i< 700 ; i = i+block_size){
        cubo = createCubo_Nube(i, 1950, block_size, nubeMaterial);
    }
    
    cubo = createCubo_Nube(1400, 2300, block_size, nubeMaterial);
    cubo = createCubo_Nube(1400, 2150, block_size, nubeMaterial);
    cubo = createCubo_Nube(1400, 2000, block_size, nubeMaterial);
    
    //Planta 2
    cubo = createCubo_Nube(1400, 1850, block_size, nubeMaterial);
    cubo = createCubo_Nube(1400, 1800, block_size, nubeMaterial);
    cubo = createCubo_Nube(1350, 1800, block_size, nubeMaterial);
    cubo = createCubo_Nube(1400, 1650, block_size, nubeMaterial);
    cubo = createCubo_Nube(1350, 1650, block_size, nubeMaterial);
    cubo = createCubo_Nube(1400, 1600, block_size, nubeMaterial);
    
    for(i = 1250 ; i< 1450 ; i = i+block_size){
        cubo = createCubo_Nube(i, 1750, block_size, nubeMaterial);
    }
    
    for(i = 550 ; i< 1450 ; i = i+block_size){
        cubo = createCubo_Nube(i, 1700, block_size, nubeMaterial);
    }
    
    for(i = 0 ; i< 300 ; i = i+block_size){
        cubo = createCubo_Nube(i, 1400, block_size, nubeMaterial);
    }
    
    //Planta 3
    //Esquina
    for(i = 0 ; i< 200 ; i = i+block_size){
        cubo = createCubo_Nube(i, 50, block_size, nubeMaterial);
    }
    for(i = 0 ; i< 150 ; i = i+block_size){
        cubo = createCubo_Nube(i, 100, block_size, nubeMaterial);
    }
    cubo = createCubo_Nube(50, 150, block_size, nubeMaterial);
    
    //dcha
    for(i = 0 ; i< 1200 ; i = i+block_size){
        cubo = createCubo_Nube(i, 1150, block_size, nubeMaterial);
    }
    
    for(i = 1200 ; i< 1450 ; i = i+block_size){
        cubo = createCubo_Nube(i, 950, block_size, nubeMaterial);
    }
    
    for(i = 950 ; i< 1250 ; i = i+block_size){
        cubo = createCubo_Nube(i, 550, block_size, nubeMaterial);
    }
    
    //Planta 4
    for(i = 250 ; i< 1450 ; i = i+block_size){
        cubo = createCubo_Nube(i, 350, block_size, nubeMaterial);
    }
    
    for(i = 150 ; i< 350 ; i = i+block_size){
        cubo = createCubo_Nube(850, i, block_size, nubeMaterial);
    }
    cubo = createCubo_Nube(850, 250, block_size, nubeMaterial);
}