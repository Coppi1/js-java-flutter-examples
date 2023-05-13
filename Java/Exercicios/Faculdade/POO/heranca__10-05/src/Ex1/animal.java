package Ex1;

import javax.sound.midi.Soundbank;
import javax.swing.*;

public class animal {
    String picture;
    String food;
    String hunger;
    String boundaries;
    String location;

    public void makeNoise(){
        JOptionPane.showMessageDialog(null, "Animal fazendo barulho");
    }
    public void eat(){
        JOptionPane.showMessageDialog(null, "Animal comendo");
    }
    public void sleep(){
        JOptionPane.showMessageDialog(null, "Animal dormindo");
    }
    public void roan(){
        JOptionPane.showMessageDialog(null, "Animal esta andando");
    }

}
