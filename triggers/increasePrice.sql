BEGIN
	IF NEW.price < 200 THEN
		UPDATE items
		SET price = 0
		WHERE availability = (
			SELECT availability FROM items
			WHERE availability = false
			LIMIT 1
		);
		END IF;
		
		RETURN NEW;
END;
