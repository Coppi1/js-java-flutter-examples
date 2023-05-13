package Ex1;

import javax.swing.*;

public class fel_tigre extends felino {
    @Override
    public void makeNoise() {
        JOptionPane.showMessageDialog(null, "Tigre uivando");
    }

    @Override
    public void eat() {
        JOptionPane.showMessageDialog(null, "Tigre come animais");
    }
}
