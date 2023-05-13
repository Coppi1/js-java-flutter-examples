package Ex1;

import javax.swing.*;

public class can_lobo extends canino{
    @Override
    public void makeNoise() {
        JOptionPane.showMessageDialog(null, "Lobo uivando");
    }

    @Override
    public void eat() {
        JOptionPane.showMessageDialog(null, "Lobo come carne");
    }
}
