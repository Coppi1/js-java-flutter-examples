

package br.com.unifio.arraylist;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListExemplos {

    public static void main(String[] args) {
        
        ArrayList<String> bandas = new ArrayList();
        
        bandas.add("Kiss");
        bandas.add("AC/DC");
        bandas.add("Mettalica");
        
        System.out.println(bandas);
        
        for(int i=0; i < bandas.size(); i++){
            System.out.println(bandas.get(i));
        }
        
        bandas.remove(0);
        System.out.println(bandas);

        bandas.add(1, "Rush");
        System.out.println(bandas);
        
        bandas.set(1, "The Beatles");
        System.out.println(bandas);
        
        Collections.sort(bandas);
        System.out.println(bandas+"\n\n");
        
        for(String elemento:bandas){ //Joga os elementos das bandas para "elemento"
            System.out.println(elemento);
        }
        System.out.println("\n\n");
        bandas.forEach(nomesBandas -> System.err.println(nomesBandas));
        
    }
}
