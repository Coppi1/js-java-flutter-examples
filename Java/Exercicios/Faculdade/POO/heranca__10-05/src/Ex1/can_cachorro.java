package Ex1;

import javax.swing.*;

public class can_cachorro extends canino {
    @Override
    public void makeNoise() {
        JOptionPane.showMessageDialog(null, "Cachorro latindo");
    }

    @Override
    public void eat() {
        JOptionPane.showMessageDialog(null,"Cachorro come ração");
    }
}
