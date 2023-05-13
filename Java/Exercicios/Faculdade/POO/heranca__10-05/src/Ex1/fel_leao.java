package Ex1;

import javax.swing.*;

public class fel_leao extends felino {
    @Override
    public void makeNoise() {
        JOptionPane.showMessageDialog(null,"Leao uivando");
    }

    @Override
    public void eat() {
        JOptionPane.showMessageDialog(null, "Leão come animais");
    }
}
