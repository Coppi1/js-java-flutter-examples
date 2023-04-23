
package br.com.unifio.arraylist;

import java.util.ArrayList;
import javax.swing.JOptionPane;


public class ex1 {
    
    public static void main(String[] args) {
          
        ArrayList<Integer> num = new ArrayList();
        int a;
        
        for(int i=0;i<5;i++){
            a = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite o "+(i+1)+"º número: "));
            num.add(a);
        }
        
        for(int ele:num){
            System.out.println(ele);
        }

    }
    
}
