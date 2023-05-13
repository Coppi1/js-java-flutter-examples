package Ex1;

import javax.swing.*;

public class fel_gato extends felino{
    @Override
    public void makeNoise() {
        JOptionPane.showMessageDialog(null, "Gato mia");
    }

    @Override
    public void eat() {
        JOptionPane.showMessageDialog(null, "Gato come ração");
    }
}
